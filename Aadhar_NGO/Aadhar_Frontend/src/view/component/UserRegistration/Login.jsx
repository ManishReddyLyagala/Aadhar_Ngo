import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import loginlogo from "./Sample 2.gif";
const Login=({ onLogin })=>{
  
  const navigate=useNavigate();
  const [logindata,setlogin]=useState({
    email:"",
    password:""
  })
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
 

  const formHandler=(e)=>{
    setlogin({...logindata,[e.target.name]:e.target.value});
  }
  useEffect(()=>{
    if(Object.keys(formErrors).length===0&&isSubmit){
      // console.log(logindata)
      fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(logindata)
    }).then(data=>data.json()).then(resp=>{
      console.log(resp)
      if(resp.email==undefined ||resp.email==null){
        alert('user not found?')
      }
      else if(resp.msg=="ok"){
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('user',JSON.stringify(resp))
        onLogin(); 
        { JSON.parse(localStorage.getItem('user'))&&JSON.parse(localStorage.getItem('user')).user=="Admin"?navigate('/Admin'):navigate('/')}
      }else if(resp.msg!=="ok"){alert('enter a valid email/password')}
      
    })
    .catch(err=>console.log(err))
    }
    setlogin({
      email:"",
      password:""
    })
  },[formErrors])
  const handleLogin=async (e)=>{
    e.preventDefault();
    setFormErrors(validate(logindata));
    setIsSubmit(true);
    // fetch('http://localhost:5000/users',{
    //   method:'POST',
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body:JSON.stringify(logindata)
    // }).then(data=>data.json()).then(resp=>{
    //   console.log(resp.msg)
    //   if(resp.email!==undefined ||resp.email!==null){
    //   if(resp.msg=="ok"){localStorage.setItem('isLoggedIn', true)
    //     localStorage.setItem('user',JSON.stringify(resp))
    //     onLogin(); 
    //     { JSON.parse(localStorage.getItem('user'))&&JSON.parse(localStorage.getItem('user')).user=="Admin"?navigate('/Admin'):navigate('/')}
    //   }else{alert('enter correct details')}
    //   }else{
    //     alert('user not found')
    //   }
    // })
    // .catch(err=>console.log(err))
   
  }

  const validate=(values)=>{
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if(!values.name){
    //   errors.name="Username is required!";
    // }
    if(!values.email){
      errors.email="Email is required!";
    }
    else if(!regex.test(values.email)){
      errors.email="This is not a valid email format";
    }
    if(!values.password){
      errors.password="Password is required!";
    }else if(values.password.length<6){
      errors.password="password must be more than 6 characters";
    }
    
    return errors;
  }
    return(
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link
                to="/signin"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email" onChange={formHandler} value={logindata.email} name="email"
                    ></input>
                  </div>
                </div>
                <p className="text-red-600">{formErrors.email}</p>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                     
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password" onChange={formHandler} value={logindata.password} name="password"
                    ></input>
                  </div>
                </div>
                <p className="text-red-600">{formErrors.password}</p>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                 onClick={handleLogin}>
                    Get started 
                  </button>
                </div>
                <Link to="/forgot-password"  className="font-semibold text-black hover:text-blue-700 transition-all duration-200 hover:underline py-4">Forgot Password ?</Link>
              </div>
            </form>
            
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover "
            src={loginlogo}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Login;
