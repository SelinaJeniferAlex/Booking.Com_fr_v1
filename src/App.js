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
import Admin from './Module/Admin/Admin';
import AdminSecurity from './Module/Admin/AdminSecurity';
import AddStays from './Module/Admin/AddStays';
import ReadStays from './Module/Admin/ReadStays';
import UpdateStays from './Module/Admin/UpdateStays';
import DeleteStays from './Module/Admin/DeleteStays';

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
          <Route path='/admin' element={<AdminSecurity/>}/>
          <Route path='/adminDash' element={<Admin/>}/>
          <Route path='/admin/create' element={<AddStays/>}/>
          <Route path='/admin/read' element={<ReadStays/>}/>
          <Route path='/admin/update' element={<UpdateStays/>}/>
          <Route path='/admin/delete' element={<DeleteStays/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
