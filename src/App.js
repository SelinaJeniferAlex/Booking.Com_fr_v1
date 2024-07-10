import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Register from './Module/Register';
import Login from './Module/Login';
import Property from './Module/Property';
import SearchForm from './Module/SearchForm';
import AdminPage from './Module/AdminPage';
import GetData from './Module/GetData';
import Home from './Module/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/log' element={<Login/>}/>
          <Route path='/searchform' element={<SearchForm/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/getdata' element={<GetData/>}/>   
          <Route path='/home' element={<Home/>}/>
          <Route path='/property' element={<Property/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
