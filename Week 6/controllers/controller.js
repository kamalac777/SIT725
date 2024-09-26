let collection = require('../models/contact');

const postContact = (req, res) => {
    let contact = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(contact.email)) {
        return res.status(400).json({ message: 'Please enter a valid email address, e.g., user@example.com' }); 
    }

    collection.postcontact(contact, (err, result) => {
        if (!err) {
            res.status(200).json({ statusCode: 200, data: result, message: 'Contact Added Successfully' });
        } else {
            res.status(500).json({ message: 'Failed to add contact' });
        }
    });
}


const getAllContacts = (req,res) => {
    collection.getAllcontacts((err, result) => {
        if (!err) {
            res.json({statusCode:200, data:result, message:'Contact get Successfully'});
        }
    });
}
module.exports = {postContact,getAllContacts}