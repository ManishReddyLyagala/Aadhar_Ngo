import React, { useState } from "react";

const ForgotPassword=()=>{
  const [email,setemail]=useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    alert("check your given mail to update password")
    const resp=fetch('http://localhost:5000/forgetpassword',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email:email
      })
    })
  }
    return(
        <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Forgot Password ?</h2>
             
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
                        placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} value={email} name="email"
                      ></input>
                    </div>
                  </div>
                
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                   onClick={submitHandler}>
                     Send
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

export default ForgotPassword;