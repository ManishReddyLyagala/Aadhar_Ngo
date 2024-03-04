const db=require('../models')

//create mail Model
const User= db.user;

const addUser=async (req,res)=>{

    let details={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        userType:req.body.user
    }

    const userresp=await User.create(details)
    console.log(userresp.toJSON());
    res.status(200).send({email:userresp.email,name:userresp.name,user:userresp.userType});
}

const getAllUsers=async(req,res)=>{
    let details=await User.findAll({
        attributes:['id','name','email','userType']
    })
    // details=JSON.stringify(details)
    res.status(200).send(details);
    //res.status(200).json({data:details})
}

const getOneUser=async (req,res)=>{
    let email=req.body.email;
    console.log(email)
    let userresp=await User.findOne({where:{ email : email }})
    try{
    if(userresp.password===req.body.password){
        res.status(200).json({email:userresp.email,name:userresp.name,user:userresp.userType,msg:"ok"})
    }else{
        res.status(500).json({msg:'the password is wrong'})
    }
}catch(e){

    console.log(e)
}
    
}
const getOneUserbyId=async (req,res)=>{
    let id=req.params.id;
    console.log(id)
    let userresp=await User.findOne({where:{ id : id }})
    try{
        res.status(200).json({email:userresp.email,name:userresp.name,user:userresp.userType,msg:"ok"})
        
    }catch(e){
    console.log(e)
}
}

const updateUser=async (req,res)=>{
    console.log(req.body)
    let id=req.params.id
    console.log('id',id)
    let userresp=await User.update(req.body,{where:{id:id}})
    res.status(200).send(userresp)
}

const deleteUser=async(req,res)=>{
    let id=req.params.id
    console.log(id);
    await User.destroy({where:{id:id}})
    res.status(200).send("deleted successfully!")
}
// user.findAll({where:{catagory:cat}})
module.exports={
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    getOneUserbyId
}