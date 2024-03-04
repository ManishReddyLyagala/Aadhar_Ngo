const db=require('../models')
const Donate=db.donate;
const Razorpay = require("razorpay")
const { v4: uuidv4 } = require('uuid');
const razorpay=new Razorpay({
    key_id:'rzp_test_fAhH6UNJRrS55W',
    key_secret:'MvFrSpq0WbrJjGLUwthQnK6B'
})
const paymentInit = async (req,res) =>{
    try{
        const payment_capture=1;
        const amt=req.body.amount;
        const currency='INR';
// console.log(req.body);
        const options={
            amount:amt*100,
            currency,
            receipt:uuidv4(),
            payment_capture
        }
      const response=await razorpay.orders.create(options)
      console.log(response)
      res.json({
        id:response.id,
        currency:response.currency,
        amount:response.amount
      });
    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:e.message
        })
    }
}

const storeDonateDB=async (req,res)=>{
    try{
        let don_details={
            dname:req.body.dname,
            phoneno:req.body.phoneno,
            email:req.body.email,
           amount:req.body.amount,
           payment_id:req.body.payment_id,
           donstatus:req.body.status,
           category:req.body.category
           }
           console.log(req.body.status)
           const donresp=await Donate.create(don_details)
           res.status(200).send(donresp);
    }catch(e){
        console.log(e);
    }
}

const getDonationDetails=async(req,res)=>{
try{
    const resp=await Donate.findAll({})
    res.status(200).json(resp);
}catch(e){console.log(e)}
}
const getOneDonations=async(req,res)=>{
    let email=req.params.email;
try{
    const resp=await Donate.findAll({where:{email:email}})
    res.status(200).send([resp]);
}catch(e){console.log(e)}
}
module.exports={
    paymentInit,
    storeDonateDB,
    getDonationDetails,
    getOneDonations
}