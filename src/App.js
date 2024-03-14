import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Register from './Module/Register';
import Login from './Module/Login';
import Demo from './Module/Demo'
import AdminPage from './Module/AdminPage';
import HotelImage from './Module/HotelImage';
import ImageUpload from './Module/ImageUpload';
import GetData from './Module/GetData'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/reg' element={<Register/>}/>
          <Route path='/log' element={<Login/>}/>
          <Route path='/demo' element={<Demo/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/hotelimage' element={<HotelImage/>}/>
          <Route path='/image' element={<ImageUpload/>}/>
          <Route path='/getdata' element={<GetData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
