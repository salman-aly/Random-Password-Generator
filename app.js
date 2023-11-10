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