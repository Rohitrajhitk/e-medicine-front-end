import React, { useState } from "react";
import './Registration.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [regdata, setRegdata] = useState({
    fname: "",
    lname: "",
    Pass: "",
    email: ""
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegdata({ ...regdata, [name]: value })
  }

  const submitData = () => {
    const url = 'https://localhost:7241/api/Users/registration';
    const payload = {
      "firstName": regdata.fname,
      "lastName": regdata.lname,
      "password": regdata.Pass,
      "email": regdata.email,
      "type": 'USER'
    }
    return axios.post(url, payload)

  }
  const handleSubmit = () => {
    console.log('reg', regdata);
    submitData();
    navigate(`/`)
  }



  return (
    <>
      <div className="row">
        <label >First Name</label>
        <input type="text" name='fname' value={regdata.fname} onChange={handleChange}></input>

        <label>Last Name</label>
        <input type="text" name='lname' value={regdata.lname} onChange={handleChange}></input>

        <label>Email </label>
        <input type="email" name='email' value={regdata.email} onChange={handleChange}></input>

        <label>Password</label>
        <input type="pass" name='Pass' value={regdata.Pass} onChange={handleChange}></input>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );

}

export default Registration;