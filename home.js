$(document).ready(function(){
    $('#email').keyup(function(){
        var regx_email= /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-z]{5,10}(.)([a-zA-z]+))$/i

        var email_inp =$(this).val();
        if(regx_email.test(email_inp)) {
            $("#email_status").test("valid");
            $("#email_status").removeClass("text-danger")
        }
        else{
            $("#email_status").test("invalid");
            $("#email_status").addClass("text-danger")
        }
    });



    $(document).ready(function(){
        $('#pass').keyup(function(){
            var regx_pass= /^([a-zA-Z]+)([0-9]+)?(@)([a-zA-z]{5,10}(.)([a-zA-z]+))$/i
    
            var pass_inp =$(this).val();
            if(regx_pass.test(pass_inp)) {
                $("#pass_status").text("valid");
                $("#pass_status").removeClass("text-danger")
            }
            else{
                $("#pass_status").test("invalid");
                $("#pass_status").addClass("text-danger")
            }
        });

});