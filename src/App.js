
import './App.css';
import React from 'react';
import Home from './pages/Home.jsx';
import AdminPage from './pages/Admin/AdminPage.jsx';
import AdminHome from './pages/Admin/AdminHome.jsx';
import Request from './pages/Request.jsx';
import DetailCar from './pages/CarDetail.jsx';
import RecommendCar from './pages/RecommendCar.jsx';
import { Route, Routes } from 'react-router-dom';
import CallRequestPopup from './components/CallRequestPopup.js';
function App() {
  return (
   <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/requestpage' element={<Request/>}/>
       <Route path='/AdminHome' element={<AdminHome/>}/>
       <Route path='/Adminpage' element={<AdminPage/>}/>
       <Route path='/detailcar' element={<DetailCar/>}/>
       <Route path='/RecommendCar' element={<RecommendCar/>}/>
       <Route path='/CallRequestPopup' element={<CallRequestPopup/>}/>

   </Routes>
  );
}

export default App;
