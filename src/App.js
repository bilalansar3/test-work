import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import "./components/Style.css"
import NewUser from './components/NewUser';
function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/adduser' element={<NewUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
