const asynchandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/contacts
//@ access public

const getContacts =asynchandler(async (req, res)=>{
    res.status(200).json({message: "get all contacts"});
});

//@desc Create new contacts
//@route POST /api/contacts
//@ access public

const createContact =asynchandler(async (req, res)=>{
    const {name, age, home} = req.body;
    if(!name || !age || !home){
        res.status(400);
        throw new Error("All fields are manda tory");
    }
    res.status(201).json({message: "create contact"});
});

//@desc get contact
//@route GET /api/contacts/:id
//@ access public

const getContact =asynchandler(async (req, res)=>{
    res.status(200).json({message: `get contact with id ${req.params.id}`});
});

//@desc Update contact
//@route put /api/contacts
//@ access public

const updateContact =asynchandler(async (req, res)=>{
    res.status(201).json({message: `update contact for ${req.params.id}`});
});

//@desc delete contact
//@route put /api/contacts
//@ access public

const deleteContact =asynchandler(async (req, res)=>{
    res.status(200).json({message: `delete contact for ${req.params.id}`});
});


module.exports = {getContacts, getContact, createContact,updateContact,deleteContact}
