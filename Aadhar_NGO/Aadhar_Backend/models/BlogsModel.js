module.exports=(sequelize,DataTypes)=>{
    const Blog=sequelize.define("blog",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
           type:DataTypes.STRING,
            allowNull:false
        },category:{
            type:DataTypes.STRING,
        },image:{
            type:DataTypes.STRING,
        }
    },{
    
    })
    return Blog;
    }
    