var express = require('express');
var router = express.Router();
var Admin = require('../../model/admin');

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = require('./schema');
/*var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 */
 

var users= [];
var user= {};

var root = {
  Admin: () => {
    return Admin.find({}, function(err, result){
      console.log(err);
    });

  },
  Admins:()=>{
    return Admin.find({});
  },
  GetAdminById: ({id})=>{
    return Admin.findById(id, function(err, result){
      console.log(err);
    });
  },
  GetAdminByStatus: ({status})=>{
    return Admin.find({status: status});
  },
  GetAdminByPhone: ({phone})=>{
    return Admin.find({phone: phone});
  },
  GetAdminByEmail: ({email})=>{
    return Admin.find({email: email});
  },
  createAdmin:({input}) =>{
    user= input;
    console.log(user);
    const admin = new Admin({
      name: user.name,
      phone: user.phone,
      email: users.email,
      password: user.password,
      status: user.status,
    });
    admin.save();
    return user;
  }, 
  updateAdmin: async ({input}) =>{
    return await Admin.findOneAndUpdate({_id: input.id}, input, {new: true});
  }
};


router.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));





module.exports = router;