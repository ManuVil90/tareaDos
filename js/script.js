function getForm() {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;
    let cedula = document.getElementById("cedula").value;
    let Nacionalidad = document.getElementById("region").value;


console.log( nombre + ' ' + email + ' ' + birthday + ' ' + cedula + ' ' + Nacionalidad + ' ');

var json = {
    "name": nombre,
    "email": email,
    "birthday": birthday,
    "cedula": cedula,
    "Nacionalidad": Nacionalidad
}

console.log(json);

}