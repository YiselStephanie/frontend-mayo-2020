// function alerta(ok) {
//   alert(ok); //esta dent de una fun busca el parametro osea ok
// }

// function suma(a, b) {
//   resultado = a + b;
//   return resultado; //en consola 5,5 da diez coma porq ya escoji sumar
// }

// function capitalize(data) {
//   capitalized = data;
//   return capitalized;
// }
// function cambiarColor(color) {
//   document.getElementById("demo").style.backgroundColor = color;
// }

// function cambiarWidht(widht) {
//   document.getElementById("demo2").style.width = widht;
// }

function cambiarTexto(elemento, texto) {
  document.getElementById(elemento).innerHTML = texto;
}
// function obtenerContenido(elemento) {
//   var data = document.getElementById(elemento).textContent;
//   alert(data);
//   return data;
// }

// function obtenerContenido2(elemento, mitexto) {
//   if (elemento !== "demo2") {
//     document.getElementById(elemento).innerHTML = "hola mundo";
//   } else {
//     document.getElementById(elemento).innerHTML = mitexto;
//   }
// }
// funcion sumar( {
//   var n1 = parseInt(document.getElementById("a").value);
//   var n1 = parseInt(document.getElementById("a").value);
//   var total =n1+n2;
//   console.log("mi suma es " total);
//   data = document.getElementById(elemento).innerHTML = "resultado: " (n1 + n2);
//   console.log(data);

//   data= document.getElementById(elemento).innerHTML =mitexto;
// }

function llenarTabla() {
  var n = 0; //contador
  var celdas = ""; //armas la tabla
  while (n <= 5) {
    console.log("contando: " + n); //debug
    celdas = celdas + "<tr><td>" + n + "</tr></td>";
    console.log("celdas: " + celdas); //debug
    n++;
  }
  mitabla = cambiarTexto("mitabla", celdas); //es indiferente meterlo o no en una variable porque no retorna datos ver abajo
  return n;
}
function llenarTabla2() {
  var n = 0;
  var celdas = "";
  for (var i = 0; i <= 5; i++) {
    console.log("contando: " + i); //debug
    celdas = celdas + "<tr><td>" + n + "</tr></td>";
    console.log("celdas: " + celdas); //debug
  }
  cambiarTexto("mitabla", celdas); //sin declarar variable no retorna datos ej suma
  return n;
}

function llenarTabla3() {
  let frutas = ["manzana", "bana", "pera", "kiwi", "naranaja", "limon"];
  var celdas = "";
  for (var i = 0; i <= 5; i++) {
    console.log("contando: " + i); //debug
    celdas = celdas + "<tr><td>" + frutas[i] + "</tr></td>";
    console.log("celdas: " + celdas); //debug
  }
  cambiarTexto("mitabla", celdas); //sin declarar variable no retorna datos ej suma
  return frutas;
}
