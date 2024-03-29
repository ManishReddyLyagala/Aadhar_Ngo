import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
const ResetPassword=()=>{
  const [password,setPassword]=useState("");
const {id}=useParams();
const navigate=useNavigate();
  const submitHandler=async(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/resetpassword/${id}`,{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        password:password
      })
    }).then(resp=>resp.json()).then(data=>{
      if(data[0]>0){
        alert('Password Successfully Changed!!');
        navigate('/login');
      }else{
        alert('could\'t reset your password');
      }
    })
   
  }
    return(
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Reset Password</h2>
             
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} name="password"
                      ></input>
                    </div>
                  </div>
                
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                   onClick={submitHandler}>
                     Update
                    </button>
                  </div>
                  
                </div>
              </form>
              
            </div>
          </div>
          
        </div>
      </section>
    )
}

export default ResetPassword;