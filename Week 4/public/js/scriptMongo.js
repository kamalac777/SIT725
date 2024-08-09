const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#"></a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.subTitle+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSubmitted = () => {
    let formData = {};
    formData.name = $('#name').val();
    formData.email = $('#email').val();

    console.log(formData);
    postcontact(formData);
}

function postcontact(contact){
    $.ajax({
        url:'/api/contact',
        type:'POST',
        data:contact,
        success: (result)=>{
            if (result.statusCode === 201) {
                alert('contact added successfully');
            }
        }
    });
}

function getAllcontacts(){
    $.get('/api/contacts', (response)=>{
        // response's data is in array format, so we can use it
        if (response.statusCode === 200) {
            // addCards(response.data);
            console.log("The contacts are",response?.data)
        }
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#Formsubmit').click(()=>{
        formSubmitted();
    });
    $('.modal').modal();
    getAllcontacts();
});