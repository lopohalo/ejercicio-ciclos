

// const valor = (id, numero) => {
//     const quienEsId = document.querySelector("#" + id)
//     for(let i = 1; i <= numero; i++) {
//         quienEsId.innerHTML += `<option value="${i}">${i}</option>`
//         }
//     } 

// valor("hora", 23)
// valor("minuto", 59)}

// let numero = prompt("ingrese un numero")
// const sumas = (numero) => {
//     let j = 0
//     for (let i = 1; i<=numero; i++){
//         const resultado = j=j+i
//         console.log(resultado)
//     }
// }

// sumas(numero)


// const cedula = prompt("digite su cedula")
// const saberPAR = (cedula) => {
//     if(cedula % 2 == 0){
//         alert("usted tiene una cedula par")
//     } else {
//         alert("vuelva a nacer")
//     }

// }

// saberPAR(cedula)


// const edad = prompt("digite su edad")
// const genero = prompt("digite su genero")

// const verificando = (edad,genero) =>{
//     if(edad <= 10){
//         alert("reclame jugo niñato")
//     } else if (edad >= 18 && genero =="hombre"){
//         alert("reclame porcion de pizza de tres carnes  una cerveza")
//     } else if(edad >= 18 && genero === "mujer"){
//         alert("reclame una cerveza y una porcion de pizza hawaiana")
//     } else {
//         alert("orine y se acuesta")
//     }

//     }
// verificando(edad,genero)


// function ordeno() {
//     const menu = ["sopa de fideos", "sopa de pollo", "sopa al carbon", "sopa de tierra"]
//     const precios = ["90000", "5000", "4000", "2000", "150000", "1200000"]


//     let Seleccionar = document.querySelector("#escoja-menor")
//     let input = document.querySelector("#escogio-el-menor").value


//     let verificando = menu.indexOf(input)
//     let precio = precios.indexOf(precios[verificando])
//     let contador = 0
//     if (localStorage.getItem("contador") == null) {

//         localStorage.setItem("contador", contador)
//     } else {
//         contador = localStorage.getItem("contador")
//         contador++
//     }
//     if (verificando != -1 && precio != -1) {
//         localStorage.setItem(`menu${contador}`, menu[verificando])
//         localStorage.setItem(`precio${contador}`, precios[precio])
//         localStorage.setItem("contador", contador)
//     }
// }

// function guardar() {
//     let objeto = {}
//     let guardar1 = document.querySelector("#texto").value
//     objeto = {guardar1}
//     if(localStorage.getItem("textos") == null) {
//         localStorage.setItem("textos", "[]")

//     } else {
//         let trayendo = localStorage.getItem("textos")
//         trayendo = JSON.parse(trayendo)
//         trayendo.push(objeto)
//         console.log(trayendo)
//         localStorage.setItem("textos", JSON.stringify(trayendo))
//     }
// }
// function finalizar() {
//     let info = localStorage.getItem("textos")
//     info = JSON.parse(info)
    
//     info.forEach(element => {
//         console.log(element)
//     });
// }
