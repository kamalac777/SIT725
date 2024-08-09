let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://localhost:27017";
const uri = "mongodb+srv://kamalac777:Mu8ffb3NVvU8pVYj@cluster0.zfltsnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
let port = process.env.port || 3040;
let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Contact');
        console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}

app.get('/', function (req,res) {
    res.render('index.html');
});

app.post('/api/contact', (req,res)=>{
    let contact = req.body;
    postcontact(contact, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'Contact Added Successfully'});
        }
    });
});
app.get('/api/contacts', (req,res)=>{
    getAllcontacts((err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'Contact get Successfully'});
        }
    });
});
function postcontact(contact,callback) {
    collection.insertOne(contact,callback);
}

function getAllcontacts(callback){
    collection.find({}).toArray(callback);
}

app.listen(port, ()=>{
    console.log('express server started');
    runDBConnection();
});