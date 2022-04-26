function calcularMediaAritmetica(lista) {
    /*let sumaLista1 = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista1 = sumaLista1 + lista[i];
    }*/
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista1 = sumaLista / lista.length;   
    return promedioLista1;
}

const lista1 = [
    500,
    200,
    400000000,
    100,
];

//var numbers = [4, 2, 5, 1, 3];
lista1.sort(function(a, b) {
  return a - b;
});
console.log(lista1);

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];

    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio;
} else {
    mediana = lista1[mitadLista1];
}





