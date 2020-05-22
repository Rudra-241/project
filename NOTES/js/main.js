const validate = () => {
    var e = document.getElementById("Email").value;
    var p = document.getElementById("password").value;
    if (e === "Rashi" && p === "password") {
        var d = "Hello " + e + "!";
        swal("User Authenticated", d, "success")
        setTimeout(() => {
            document.getElementById("d1").style.display = 'none';
            document.getElementById("info").style.display = 'block';
        }, 3000);


    } else
        swal("Something\'s wrong", "Invalid user name and password", "error")
}
const register = () => {
    document.getElementById("d1").style.display = 'none';
    document.getElementById('d2').style.display = 'block';
}