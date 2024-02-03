import React ,{ useState } from 'react'

import {useNavigate} from "react-router-dom";

const SignUp = () => {

  const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const{name,email,password} = credentials;


      const response = await fetch ("http://localhost:5000/api/auth/createuser",{
         method:'POST',
         headers: {
          'Content-Type': 'application/json',
    },
    body: JSON.stringify({name,email,password}),
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
    
 return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-gray-300">
    <form onSubmit={handleSubmit} className="bg-success shadow-md rounded-3 px-5 py-4 mb-4">
      <h2 className="text-2xl mb-4 text-white">Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="name " className="form-label text-white">Username</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          placeholder="Username"
          value={credentials.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-white">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label text-white">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-3">
          <label htmlFor="cpassword" className="form-label text-white">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={credentials.cpassword}
            onChange={onChange}
            required
          />
        </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div className="d-flex justify-content-center text-sm text-dark mt-3">
        Already a user? 
       
      </div>
    </form>
  </div>
);

}


export default SignUp