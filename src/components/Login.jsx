import React, { createContext, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DashBoard from "./users/DashBoard";
import Header from "./users/Header";
const Sendval = createContext();
const Login = () => {
  const navigate = useNavigate();
  const [val, setVal] = useState({
    email: '',
    pass: ''
  })
  const [prodata, setProdata] = useState();
  const solve1 = (event) => {
    console.log("target data");
    console.log(event.target.value);
    const { value, name } = event.target;

    setVal((prevval) => {
      return (
        {
          ...prevval,
          [name]: value,
        }
      );
    });
  }
   const apival  = async () =>{
    const url = 'https://localhost:7241/api/Users/login';
    const payload = {
      "password": val.pass,
      "email": val.email,
      "Type": "User"
    }

    const resdata =  await axios.post(url, payload);
    return resdata;
   }
  const onLogin =  () => {
    
    const resdata = apival();
    console.log("HEllo");
    if (
   //    resdata.data.statusCode == 200 
       true
    ) {
      window.alert('dashborad if navigataion');
      <Sendval.Provider value = {resdata.data}>
       <DashBoard />
      </Sendval.Provider>
    }
    else {
      window.alert("User details are not correct");
    }
    console.log("Response data");
    console.log(resdata);
    console.log("PRodata");
    setProdata(resdata.data.user);
    console.log(prodata);

  }
  return (
    <>
      <form>

        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" value={val.email} name="email" onChange={solve1} />
          <label className="form-label" for="form2Example1">Email address</label>
        </div>


        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" value={val.pass} name="pass" onChange={solve1} />
          <label className="form-label" for="form2Example2">Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label className="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>

          <div className="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>


        <button type="button" className="btn btn-primary btn-block mb-4" onClick={onLogin}>Sign in</button>


        <div className="text-center">
          <p>Not a member? <NavLink to="/registration">Register</NavLink></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
export { Sendval };