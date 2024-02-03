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
            "Content-Type": "application/json",
      },

      body: JSON.stringify({name,email,password}),
  });
  const json = await response.json()
  console.log(json);

  if(json.success){
    //save the auth token and redirect it
    localStorage.setItem('token' ,json.authtoken);
    navigate("/")
    }
    else{
      alert("Invalid Credentials")
    }
    
    const onChange = (e) => {
      setCredentials({...credentials,[e.target.name]:e.target.value})
    
   }
    
      return(
      
        <div className="container">
        
          <form onSubmit={handleSubmit}> 
          
          <div className="mb-3">
            <label htmlFor="name " className="form-label">Name</label>
            <input type="text" className="form-control " id="name"  onChange= {onChange } aria-describedby="emailHelp" placeholder="Name"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control form-control-sm" id="email" onChange= {onChange } aria-describedby="emailHelp" placeholder="email"/>
            
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-group col-xs-4">
            <label htmlFor="cpassword" className="form-label">Password</label>
            <input type="cpassword" className="form-control" id="cpassword" placeholder=" confirm Password"/>
          </div>
          <div className="form-check col-xs-4">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
    
    </form>
    </div>


      )
    }
    }

export default SignUp


//signup

return (
  <div className="flex justify-center items-center h-screen bg-gray-300">
    <form onSubmit={handleSubmit} className="bg-green-300 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 ">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border border-cyan-400 rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="name"
          name="name"
          placeholder='name'
          
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border border-cyan-400 rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border border-cyan-400 rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          required
        />
        
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpassword">
         Confirm Password 
        </label>
        <input
          className="shadow appearance-none border border-cyan-400 rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          id="cpassword"
          name="cpassword"
          placeholder=" confirm Password"
          onChange={onChange}
          required
        />
        
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>

      </div>
      <div className=" flex items-center justify-center text-sm text-blue-800 mt-4">Already a user?
        <a className="text-black text-md" href="#" onclick="" >SignIn</a>
        </div>
    </form>
  </div>
);





//previous signup

return(
  
  <div className="container">
  
    <form onSubmit={handleSubmit}> 
    
    <div className="mb-3">
      <label htmlFor="name " className="form-label">Name</label>
      <input type="text" className="form-control" id="name"  name= "name" onChange= {onChange } aria-describedby="emailHelp" placeholder="Name"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control " id="email" name= "email"  onChange= {onChange } aria-describedby="emailHelp" placeholder="Email"/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control " id="password" name= "password" onChange= {onChange } placeholder="Password"/>
    </div>
    <div className="form-group col-xs-4">
      <label htmlFor="cpassword" className="form-label">Password</label>
      <input type="password" className="form-control" id="cpassword" name="cpassword" onChange= {onChange }  placeholder=" confirm Password"/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>

</form>
</div>


)


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gray-300">
      <form onSubmit={handleSubmit} className="bg-success shadow-md rounded-3 px-5 py-4 mb-4">
        <h2 className="text-2xl mb-4 text-white">Sign Up</h2>
        <div className="mb-3">
          <label className="form-label text-white">Username</label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
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
          <Link to="/signin" className="text-dark ms-2">SignIn</Link>
        </div>
      </form>
    </div>
  );

