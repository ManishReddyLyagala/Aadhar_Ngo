import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
const Volenteer=()=>{
    const location = useLocation();
  console.log(location.state.ename)
  const [vdetails,setvdetails]=useState({
    name:"",
    age:"",
    phoneno:"",
    email:"",
    address:"",
    catagory:""
  })

const changeHandler=(e)=>{
    setvdetails({...vdetails,[e.target.name]:e.target.value})
}
const handleRegister = async (e) => {
    e.preventDefault()
  try {
    await axios.post('http://localhost:5000/volunteer/add', {
      to: vdetails.email,
      subject: `Thank You for Registering! ${location.state.ename} camp`,
      text: `Thank you Dear ${vdetails.name} for registering for our camp. We look forward to seeing you!`,
      html: `<p>Thank you Dear ${vdetails.name} for registering for our camp. We look forward to seeing you!</p>`,
      name:vdetails.name,
      age:vdetails.age,
      email:vdetails.email,
      address:vdetails.address,
      phoneno:vdetails.phoneno,
      event_name:location.state.ename,
      event_catagory:vdetails.catagory
    });
    alert('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

    return(
        <div className="items-center justify-center w-screen h-full grid">
            <div className="items-center justify-center w-full">
            <h1 className="py-2">Welcome to the <span className="text-orange-400 text-decoration-line: underline decoration-indigo-500">{location.state.event}</span> Camp</h1>
            <form className="w-full py-1">
                <div >
                <label htmlFor="name" className="text-base font-medium text-gray-900">Name : <input type="text" onChange={changeHandler} value={vdetails.name} name="name" placeholder="Enter Volunteer Name" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mt-1"/></label> <br/>
                <label htmlFor="age" className="text-base font-medium text-gray-900">Age : <input type="number" onChange={changeHandler} value={vdetails.age} name="age" placeholder="Enter Volunteer Age" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mt-1"/></label> <br/>
                <label htmlFor="phoneno" className="text-base font-medium text-gray-900">Phone No : <input type="number" onChange={changeHandler} value={vdetails.phoneno} name="phoneno" placeholder="Enter Volunteer Number" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mt-1"/></label> <br/>
                <label htmlFor="email" className="text-base font-medium text-gray-900">Email : <input type="email" onChange={changeHandler} value={vdetails.email} name="email" placeholder="Enter Volunteer Email Address" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mt-1"/></label> <br/>
                <label htmlFor="catagory" className="text-base font-medium text-gray-900">Category : <input type="text" onChange={changeHandler} value={vdetails.catagory} name="catagory" placeholder="Enter event category" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mt-1"/></label> <br/>
                <label htmlFor="address" className="text-base font-medium text-gray-900">Address : <textarea type="text" onChange={changeHandler} value={vdetails.address} name="address" placeholder="Enter Volunteer Email Address" className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 mt-1"/></label> <br/>
                <button type="button"  className="text-white flex w-full h-1 items-center justify-center rounded-md bg-black px-3.5 py-4 font-semibold leading-7  hover:bg-black/80" onClick={handleRegister}>Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Volenteer;