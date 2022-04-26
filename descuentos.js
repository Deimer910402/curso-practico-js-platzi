// descuentos

/*console.log({
    precioOriginal, 
    descuento, 
    porcentajeConDescuento, 
    precioConDescuento
}); */

function calcularDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioAPagar = calcularDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultPrice");

    resultP.innerText = "El precio a pagar es: $" + precioAPagar;

}