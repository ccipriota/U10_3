let listaDeSuper = [];
listaDeSuper[0] = "sal";
listaDeSuper[1] = "caramelos";
listaDeSuper[2] = "chupetines";
listaDeSuper.push("sugus", "mogul");
listaDeSuper.unshift("chocolate", "billiken");
console.log(listaDeSuper.length)
let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();
console.log(listaDeSuper.length)

console.log(listaDeSuper);
console.log("La cantidad de elementos es: " + listaDeSuper.length);
console.log("El primer elemento es: " + listaDeSuper[0]);
let ultimoElemento = listaDeSuper.length - 1;
console.log("El último elemento es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);

function logItems(arreglo) {
  arreglo.forEach(function(elemento) {
    console.log(elemento);
  });
}
let estudio = ["cuaderno cuadriculado", "lapiz", "cuaderno rayado"];

console.log("Lista de Súper");
logItems(listaDeSuper);

console.log("Estudio");
logItems(estudio);