const save = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("password").value;
    let cpas = document.getElementById("cpas").value;
    let cn = document.getElementById("cn").value;
    if (password !== cpas) alert("Please Enter the correct password");
    localStorage.setItem("name", name);
    alert(localStorage.getItem("name"));
}