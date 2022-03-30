const express= require('express');
const routes= express.Router();
const personSchema = require('../models/person_model')


routes.get('/',(req,res)=>{
    const person= personSchema(req.body);

    person.save()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}));
});

routes.get('/',(req,res)=>{
    personSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}));


        
});

routes.get('/:personId',(req,res)=>{
    const {personId}= req.params
    personSchema.findById(personId)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}));
})


routes.put('/:personId',(req,res)=>{
    const {personId}= req.params;
    const {name,lastname,age,address:{city, code_zip}}= req.body;
    personSchema.updateOne({_id:personId},{$set:{name,lastname,age,address}})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}));
})

routes.delete('/:personId',(req,res)=>{
    const {personId}= req.params;
   
    personSchema.remove({_id:personId})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message: error}));
})

module.exports = routes;
