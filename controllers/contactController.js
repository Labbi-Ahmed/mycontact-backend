

//@des Get All data
//@route get /api/name
//@access public
const getContacts = (req, res)=>{
    res.send("get name of my  Labib");
};
//@des Get All data
//@route get /api/name
//@access public
const getContact = (req, res)=>{
    res.send(`get item with id: ${req.params.id}`);
};
//@des post All data
//@route post /api/name
//@access public
const postContact = (req, res)=>{
    const {name, address, age} = req.body;
    if(!(name && address && age))
        throw new Error("All fields are mandetory");
        
    res.status(200).json({name, address, age});        
};
//@des update All data
//@route put /api/name
//@access public
const putContact = (req, res)=>{
    res.send(`update item id: ${req.params.id}`);
};
//@des delete All data
//@route delete /api/name
//@access public
const deleteContact = (req, res)=>{
    res.send(`Deleted item id: ${req.params.id}`);
};

module.exports = {getContacts, getContact, postContact, putContact, deleteContact};