import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dropdown from './Components/Dropdown';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route exact path="/" element= {<Dropdown/>}/>
      </Routes>   
      </div>
    </BrowserRouter>
  );
}

export default App;
