let collection = require('../models/contact');

const postContact = (req,res) => {
    let contact = req.body;
    collection.postcontact(contact, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'Contact Added Successfully'});
        }
    });
}

const getAllContacts = (req,res) => {
    collection.getAllcontacts((err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'Contact get Successfully'});
        }
    });
}

// const deleteCat = (req,res) => {
//     let cat = req.body;
//     collection.deleteOne(cat, (err,result) => {
//         if (!err) {
//             res.json({statusCode:201,data:result,message:'success'});
//         }
//     });
// }

module.exports = {postContact,getAllContacts}