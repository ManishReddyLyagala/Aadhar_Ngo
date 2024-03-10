import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import sample2 from './Sample 2.gif'
import Admin from "../admin/Admin";
const Sigin=({ onLogin })=>{
    const navigate=useNavigate();
    const [user,setUserType]=useState("");
    const [Key,setKey]=useState("");
  const [signindata,setsignin]=useState({
    name:"",
    email:"",
    password:""
  })

  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

const submitHandler=async()=>{
 if(user==="Admin" && Key===""){
  alert("Admin Key is Required");
 }
    if(user=="Admin" && Key!="ngo@657483@"){
      alert("Invalid Admin");
    }else{
    // console.log(signindata)
   const resp=await fetch('http://localhost:5000/adduser',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({...signindata,user}),
    })
    resp.json().then(data=>{
        if(data.email!==undefined ||data.email!==null){
            localStorage.setItem('user',JSON.stringify(data));
            localStorage.setItem('isLoggedIn', true);
            onLogin()
          {user=="Admin"?navigate('/Admin'):navigate('/')}
            
        }
    })
  }
  setsignin({
    name:"",
    email:"",
    password:""
  })
  setUserType("");
  setKey("")
}
  useEffect(()=>{
    if(Object.keys(formErrors).length===0&&isSubmit){
    submitHandler();}
  },[formErrors])
  const formHandler=(e)=>{
    setsignin({...signindata,[e.target.name]:e.target.value});
  }
  const submitForm=async (e)=>{
    e.preventDefault();
    setFormErrors(validate(signindata));
    setIsSubmit(true);
  //   if(user=="Admin" && Key!="ngo@657483@"){
  //     alert("Invalid Admin");
  //   }else{
  //   // console.log(signindata)
  //  const resp=await fetch('http://localhost:5000/adduser',{
  //     method:'POST',
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body:JSON.stringify({...signindata,user}),
  //   })
  //   resp.json().then(data=>{
  //       if(data.email!==undefined ||data.email!==null){
  //           localStorage.setItem('user',JSON.stringify(data));
  //           localStorage.setItem('isLoggedIn', true);
  //           onLogin()
  //         {user=="Admin"?navigate('/Admin'):navigate('/')}
            
  //       }
  //   })
  // }
  }
  const validate=(values)=>{
    console.log(values.password.length);
    const errors={}
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name="Username is required!";
    }
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
    }else if(values.password.length>15){
      errors.password="password can't exceed more than 15 characters!";
    }
    if(user===""){
      errors.userType="User type is Required";
    }
    
    return errors;
  }
    return(
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-5 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Signin</h2>
            <p className="mt-2 text-sm text-gray-600">
             Already have an account?{' '}
              <Link
                to="/login"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                login
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
            <p className="text-base font-medium text-gray-900">User Type : </p>
            <div className="flex ml-5 ">
            <p>User</p>{" "}<input className="mr-5 ml-2" type="radio" name="userType" value='User' onChange={(e)=>setUserType(e.target.value)}/>
            <p>Admin</p>{" "}<input className="mr-5 ml-2" type="radio" name="userType" value='Admin' onChange={(e)=>setUserType(e.target.value)}/>
             <p className="text-red-700">{formErrors.userType}</p> </div>
             {user=="Admin" ? <p className="text-base font-medium text-gray-900">Secrete Key : <input type="text"  placeholder="Secret key" onChange={(e)=>setKey(e.target.value)}/></p>:null}

              <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Name{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Name" onChange={formHandler} value={signindata.name} name="name"
                    ></input>
                  </div>
                </div>
                <p className="text-red-700">{formErrors.name}</p>
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email" onChange={formHandler} value={signindata.email} name="email"
                    ></input>
                  </div>
                </div>
                <p className="text-red-700">{formErrors.email}</p>
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
                      placeholder="Password" onChange={formHandler} value={signindata.password} name="password"
                    ></input>
                  </div>
                </div>
                <p className="text-red-700">{formErrors.password}</p>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={submitForm}>
                    Get started 
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover "
            src={sample2}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Sigin;
