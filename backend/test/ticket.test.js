const assert = require('assert');
const expect = require('chai').expect
const request = require('supertest');
const app = require('../app')

describe('Unit testing the /ticket route', function() {

  it('Should return ["url", "id", "created_at", "raw_subject"]', () => {
    request(app)
        .get('/ticket/1', {
            params: {},
        })
        .then((response) => {
            // automatic statusCode must be 200 <-- success
            expect(response.status).to.equal(200)
            //check whether restaurant_id is successfully passed
            expect(response.text.id).to.equal(1)
            // parse returned JSON string
            const parsed = JSON.parse(response.text.data)
            // initialize property array
            const expectedProperty = ["url", "id", "created_at", "raw_subject"]
            // assertions
            // expect(parsed).to.be.a('Array')
            parsed.forEach((object) => {
                expectedProperty.forEach((element) => {
                    expect(object).to.have.property(element)
                })
            })
        })

})
});

describe('Unit testing the /ticket route, but with error from customer', function() {
  
        it('Should return error', () => {
            request(app)
            .get('/ticket/103', {
                params: {},
            })
            .then((response) => {
                expect(response.status).to.equal(500)
            })
        })
  
  });

  describe('Unit testing the 404 route', function() {
  
    it('Should return error', () => {
        request(app)
        .get('/notexist', {
            params: {},
        })
        .then((response) => {
            expect(response.status).to.equal(404)
        })
    })

});

describe('Unit testing the / route', function() {

  it('Should return ["url", "id", "created_at"]', () => {
    request(app)
        .get('/', {
            params: {},
        })
        .then((response) => {
            // automatic statusCode must be 200 <-- success
            expect(response.status).to.equal(200)
            // parse returned JSON string
            const parsed = JSON.parse(response.text.data)
            // initialize property array
            const expectedProperty = ["url", "id", "created_at"]
            // assertions
            expect(parsed).to.be.a('Array')
            parsed.forEach((object) => {
                expectedProperty.forEach((element) => {
                    expect(object).to.have.property(element)
                })
            })
        })
})

});

describe('Unit testing the /page route', function() {

  it('Should return ["url", "id", "created_at"]', () => {
    request(app)
        .get('/page/2', {
            params: {},
        })
        .then((response) => {
            // automatic statusCode must be 200 <-- success
            expect(response.status).to.equal(200)
            // parse returned JSON string
            const parsed = JSON.parse(response.text.data)
            // initialize property array
            const expectedProperty = ["url", "id", "created_at"]
            // assertions
            // expect(parsed).to.be.a('Array')
            parsed.forEach((object) => {
                expectedProperty.forEach((element) => {
                    expect(object).to.have.property(element)
                })
            })
        })
    })

});