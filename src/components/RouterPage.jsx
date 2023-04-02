import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Cart from './users/Cart';
import DashBoard from './users//DashBoard';
import Header from './users//Header';
import MedicineDisplay from './users/MedicineDisplay';
import Orders from './users//Orders';
import Profile from './users//Profile';
import AdminDashBoard from './admin/AdminDashboard';
import AdminHeader from './admin/AdminHeader';
import CustomerList from './admin/CustomerList';
import Medicine from './admin/Medicine';
import Registration from "./Registration";
const RouterPage = () =>{
   return(
     <Router>
        <Routes>
           <Route exact path="/" element = {<Login />} />
           <Route exact path="/adminDashBoard" element = {<AdminDashBoard />} />
           <Route exact path="/cart" element = {<Cart />} />
           <Route exact path="/dashBoard" element = {<DashBoard />} />
           <Route exact path="/header" element = {<Header />} />
           <Route exact path="/medicineDisplay" element = {<MedicineDisplay />} />
           <Route exact path="/orders" element = {<Orders />} />
           <Route exact path="/profile" element = {<Profile />} />
           <Route exact path="/adminHeader" element = {<AdminHeader />} />
           <Route exact path="/customerList" element = {<CustomerList />} />
           <Route exact path="/medicine" element = {<Medicine />} />
           <Route exact path="/registration" element = {<Registration/> } />
        </Routes>
     </Router>
   );
}

export default RouterPage;