import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import "./components/Style.css"
import NewUser from './components/NewUser';
import NewReopcommands from './components/NewReopcommands';
import CloneApp from './components/CloneApp';
import Tocheckupdates from './components/Tocheckupdates';
function App() {
  return (
    <div className="App">

<NewReopcommands/>
<CloneApp/>
<Tocheckupdates/>



      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}></Route>
        <Route path='/adduser' element={<NewUser/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
