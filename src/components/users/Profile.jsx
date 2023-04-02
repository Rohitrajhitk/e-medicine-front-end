import React, { useState, useContext } from "react";
const Profile = () =>{
  
    const [mydata,setMydata] = useState();
    const handleChange = () =>{

    }
    const handleSubmit = () =>{

    }
   return(
     <>
        <div className="row">
        <label >First Name</label>
        <input type="text" name='fname' value={mydata.fname} onChange={handleChange}></input>

        <label>Last Name</label>
        <input type="text" name='lname' value={mydata.lname} onChange={handleChange}></input>

        <label>Email </label>
        <input type="text" name='Pass' value={mydata.Pass} onChange={handleChange}></input>

        <label>Password</label>
        <input type="text" name='email' value={mydata.email} onChange={handleChange}></input>

        <button onClick={handleSubmit}>Update</button>
        <button type="reset">Reset</button>
      </div>
     </>
   );
}

export default Profile;