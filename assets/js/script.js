$(document).ready(function () {
$(".toggle_password").on("click", function () {
    console.log('salam');
    //$(this).toggleClass("fa-eye-slash")

    input = $(this).parent().find("input");
    //console.log(input.attr)

    if (input.attr("type") == "password") {
        input.attr("type", "text");
        console.log("text");
        $(this).removeClass()("fa-eye-slash")
        $(this).addClass()("fa-eye")

    }
    else {
        input.attr("type", "password");
        console.log("pass");
        $(this).removeClass()("fa-eye")
        $(this).addClass()("fa-eye-slash")
    }
});


});


