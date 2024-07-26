function  submitForm(){
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;


    var responseDiv = document.getElementById('response');
    responseDiv.innerHTML = <p>Thank you, ${name}! Your message "${message}" has been received.</p>;
    responseDiv.style.display = 'block';

    document.getElementById('contact-form').reset();

});


