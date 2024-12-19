
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Upload from './Components/Upload_img/Upload';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import History from './Components/History_pridiction/History'
import Explore from './Components/Explore/Explore';
import SignUp from './Components/SignUp/SignUp';
import Charts from './Components/Charts/Charts';


function App() {
  return (
    <div className='App'>
    <Router >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/Charts' element={<Charts/>}></Route>
        <Route path='/History' element={<History/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
