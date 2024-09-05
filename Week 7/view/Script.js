const { postContact } = require("../controllers/controller");

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('form').on('submit', function(e){
        e.preventDefault();
        M.toast({html: 'Form submitted!'});
        var name = $('#name').val()
        var email = $('#email').val()
        var data ={
            "email": email,
            "name" : name
        }
        postContact(data);
    });
});

function postContact(data){
    console.log(data)
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:data,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('contact post successful');
            }
        }
    });
}
let socket = io();

socket.on('number', (msg) => {
  console.log('Random number: ' + msg);
});
app.post('/api/contact', (req,res)=>{
    let cat = req.body;
    postContact(contact, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
});