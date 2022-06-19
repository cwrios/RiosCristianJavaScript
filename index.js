
let saludo = prompt("Ingrese la o las persona que desea saludar, ingrese esc para salir")
while (saludo !== "esc"){
    if (saludo !== "") {
        alert("Usted a enviado un saludo a: "+ saludo)
    }else{
        alert("Ingrese al menos un nombre")
    }
    saludo = prompt("Ingrese otro nombre para saludar o esc para salir")
}