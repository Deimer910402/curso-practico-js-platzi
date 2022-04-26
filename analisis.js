// helpers

function esPar(numero) {
    return (numero % 2 === 0);
};

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista1 = sumaLista / lista.length;   
    return promedioLista1;
}
// calculadora de mediana

function medianaSalarios(lista) {

    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1= lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// mediana general

const salarys = colombia.map(
    function (elemento) {
        return elemento.salary;
    }
);

const salaryColSort = salarys.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCOl = medianaSalarios(salaryColSort);

//mediana top 10%
const spliceStart = (salaryColSort.length * 90) / 100;
const spliceCount = salaryColSort.length - spliceStart;

const salarioColTop10 = salaryColSort.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salarioColTop10);

//capacidad de ahorro
    
const capacidadAhorroPersona = colombia.map(
    function(lista){
    return (`La persona ${lista.name} tiene un salario de ${lista.salary} y unos gastos de ${lista.gastos} y su capacidad de ahorro es de ${lista.salary - lista.gastos}`);
    }
);

console.log(salaryColSort);

console.log(
    {
        medianaGeneralCOl,
        medianaTop10Col,
        capacidadAhorroPersona,
    }
);