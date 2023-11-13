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
}


//validation for weak password
var validation = document.getElementById("validation");
//all variables in one
var getAll = all;



//get the generated random password value
var generatedPassValue = pass.value;

function passwordcheck() {
    for (var i = 0; i > getAll.length; i++) {
        if (validation.value !== getAll[i]) {
            alert("weak pass")
        } else {
            alert("Strong pass")
        }
    }
    console.log(validation.value)
}

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
                    console.error("Error copying password:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to copy password. Please try again.",
                    });
                });
        }
    }
} catch (error) {
    console.log(error);
}


