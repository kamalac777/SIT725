$(document).ready(function(){
    // Initialize Materialize components
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
        postCat1(data);
    });
});




function postCat1(data){
    console.log(data)
    $.ajax({
        url:'/api/cat',
        type:'POST',
        data:data,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('cat post successful');
            }
        }
    });
}

app.post('/api/cat', (req,res)=>{
    let cat = req.body;
    postCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
});