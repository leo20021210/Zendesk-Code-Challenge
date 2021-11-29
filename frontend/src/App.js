import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import List from './List';
import Page from './Page';
import Id from './Id';

const App = props => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/page" element={<Page page = "1"/>}/>
          <Route path="/ticket/:id" element={<Id/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
