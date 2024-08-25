import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Register from './Module/UserAuthentication/Register';
import Login from './Module/UserAuthentication/Login';
import Property from './Module/Property';
import SearchForm from './Module/SearchForm';
import AdminPage from './Module/AdminPage';
import GetData from './Module/GetData';
import Home from './Module/Home';
import Demo from './Module/Demo'
import MainLayout from './Module/Layout/MainLayout';
import Layout from './Module/Layout/Layout';
import Admin from './Module/Admin/Admin';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/log' element={<Login/>}/>
          <Route path='/searchform' element={<SearchForm/>}/>
          <Route path='/adminPage' element={<AdminPage/>}/>
          <Route path='/getdata' element={<GetData/>}/>   
          <Route path='/' element={<Home/>}/>
          <Route path='/property' element={<Property/>}/>
          <Route path='/demo' element ={<Demo/>}/>
          <Route path='/mainLayout' element={<MainLayout/>}/>
          <Route path='/layout' element={<Layout/>}/>
          <Route path='/admin' element={<Admin/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
