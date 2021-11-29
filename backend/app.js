createError = require('http-errors');
express = require('express');
path = require('path');
cookieParser = require('cookie-parser');
logger = require('morgan');
const axios = require('axios')
cors = require('cors')
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
const { SSL_OP_NO_QUERY_MTU } = require('constants');
//const headers = require('fetch-headers');

app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//aAiPb2NoGOnwcbvGSqWe0aKNto1W4icOqThqrfAu
//cfc7c109b68835b9e060f903026939753d5c6eb8817bd123efc42955b2884d6f
//6dc23ee0a93a8d31978a54ee772fe8413a99b75199506ce168c397ad81201682
const config = {
	headers: {
    "Content-type": "application/json; charset=UTF-8",
		"Authorization":"Bearer 6dc23ee0a93a8d31978a54ee772fe8413a99b75199506ce168c397ad81201682"
	},
};
// fetch all tickets
app.get("/",(req, res, next) =>{

  axios.get("https://zccliupeiqi.zendesk.com/api/v2/tickets.json", config)
  .then(resp => {
    //resp = JSON.parse(resp)
    //console.log(resp.data)
    res.json(resp.data)
  }).catch(err =>{
    next(err)
  })
});

// fetch one ticket by ticket id
app.get("/ticket/:id",(req, res, next) =>{
  id = req.params.id
  url = "https://zccliupeiqi.zendesk.com/api/v2/tickets/"+id+".json"
  axios.get(url, config)
  .then(resp => {
    //console.log(resp)
    res.json(resp.data)
  }).catch(err =>{
    next(err)
  })
});

// fetch the ticket by page number, 25 tickets per page
app.get("/page/:page",(req, res, next) =>{
  page = req.params.page
  url = "https://zccliupeiqi.zendesk.com/api/v2/tickets.json?page="+page+"&per_page=25"
  axios.get(url, config)
  .then(resp => {
    //console.log(resp)
    //console.log(resp.data)
    if(resp.data.tickets.length <= 0){
      next("page limit exceed")
    }else{
      if(resp.data.next_page == null || resp.data.next_page == undefined){
        resp.data.next_page = 1
      }else{
        console.log(page)
        resp.data.next_page = parseInt(page) + 1
      }
      last = Math.ceil(resp.data.count / 25)
      if(resp.data.previous_page == null || resp.data.previous_page == undefined){
        resp.data.previous_page = last
      }else{
        resp.data.previous_page = parseInt(page) - 1
      }
      res.json(resp.data)
    }
  }).catch(err =>{
    next(err)
  })
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("404 here")
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

// error handler
app.use(function(err, req, res, next) {
  console.log("500 here")
  return res.status(500).send({ error: err });
});

module.exports = app;
