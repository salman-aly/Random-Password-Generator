var pass = document.getElementById("password");
var password = "";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var num = "123456789";
var specialChara = "!@#$%^&*()_+-={}[ ]|:;'<>,.?/"

var all = upperCase + lowerCase + num + specialChara;
//function for creating random password
function genePassword() {
    for (var i = 0; i < 16; i++) {
        var randomPassword = Math.floor(Math.random() * all.length);
        password += all[randomPassword]
    }
    pass.value = password;

    password = "";
}


//validation for weak password
var validation = document.getElementById("validation");
try {
    function copyPassword() {
        var passwordInput = document.getElementById("password");
        var passwordValue = passwordInput.value.trim();

        if (passwordValue === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Generate Password!",
            });
        } else {
            navigator.clipboard.writeText(passwordValue)
                .then(() => {
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: "Password Copied",
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((error) => {
                    console.error(error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to copy password. Please try again.",
                    });
                });
        }
    }
} catch (error) {
    // console.log(error);
}

//get the generated random password value
var generatedPassValue = pass.value;

function passwordCheck() {
    for (var i = 0; i < all.length; i++) {
        if (validation.value !== pass.value) {
            // console.log("Weak Password!")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Weak Password!",
            });
        } else {
            // console.log("Strong password!")
            Swal.fire({
                icon: "success",
                title: "Great...",
                text: "Strong Password!",
            });
        }
    }
}



//show password and hide

function showPassword() {
    var display = document.getElementById("validation");

    if (display.type === "password") {
        display.type = "text";
    } else {
        display.type = "password"
    }
}