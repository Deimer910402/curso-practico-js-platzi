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