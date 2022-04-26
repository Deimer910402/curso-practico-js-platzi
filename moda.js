function encontrarModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    console.log(listaCount)
    const listaArray = Object.entries(listaCount).sort( 
        function (valorAcumulado, nuevoValor) {
                console.log(valorAcumulado[1], nuevoValor[1]);
            return valorAcumulado[1] - nuevoValor[1];
            
    });

    const moda = listaArray[listaArray.length - 1];
    return moda;
};