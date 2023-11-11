//function for creating random password
function genePassword() {
    var pass = document.getElementById("password");
    var password = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var num = "123456789";
    var specialChara = "!@#$%^&*()_+-={}[ ]|:;'<>,.?/"

    var all = upperCase + lowerCase + num + specialChara;

    for (var i = 0; i < 16; i++) {
        var randomPassword = Math.floor(Math.random() * all.length);
        password += all[randomPassword]
    }
    pass.value = password;
}


//get the generated random password value
var generatedPassValue = password;

//function for copy
function copyPassword() {
    password.select();
    document.execCommand("copy");
    if (generatedPassValue.value === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Generate Password!",
        });
    } else {
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Password Copied",
            showConfirmButton: false,
            timer: 1500
        });
    }

}