import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

 const Login = () => {
    const [credentials,setCredentials]=useState({email:"",password:""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch ("http://localhost:5000/api/auth/login",{
         method:'POST',
         headers: {
          "Content-Type": "application/json",
    },
    body: JSON.stringify({email:credentials.email,password:credentials.password}),
  });
    
  const json = await response.json()
  console.log(json);
  if(json.success){
  //save the auth token and redirect it
  localStorage.setItem('token' , json.authtoken);
  navigate("/")
  }
  else{
    alert("Invalid Credentials")
  }
}
 const onChange = (e) => {
  setCredentials({...credentials,[e.target.name]:e.target.value})

 }


  return(

    <div className="container">
      <div className="row justify-content-center">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>
  )

}


export default Login 
