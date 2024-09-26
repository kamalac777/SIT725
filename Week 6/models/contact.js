let client = require('../dbConnection');

let collection = client.db().collection('Contact');
function postcontact(contact,callback) {
    collection.insertOne(contact,callback);
}

function getAllcontacts(callback){
    collection.find({}).toArray(callback);
}



module.exports = {postcontact,getAllcontacts}

