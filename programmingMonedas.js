const inputMoneda = document.getElementsByClassName(
  "contenedor_monedas__input__input"
)[0];
const monedasDesde = document.getElementById("monedasDesde");
const monedasHacia = document.getElementById("monedasHacia");
const botonConvertirMonedas = document.getElementById("convertir_monedas");

const nombre = document.getElementById("contenedor_nombre_input");

inputMoneda.addEventListener("input", (e) => {
  if (e.target.value < 0) {
    e.target.value = "";
  }
});

function convertirMonedas(
  opcionSeleccionadaDesde,
  opcionSeleccionadaHacia,
  valorIngresado
) {
  let stringMonedaRetornado = opcionSeleccionadaHacia + " ";
  if (opcionSeleccionadaDesde == opcionSeleccionadaHacia) {
    stringMonedaRetornado += valorIngresado;
  } else {
    if (opcionSeleccionadaDesde == "USD" && opcionSeleccionadaHacia == "CLP") {
      const montoCambiado = (valorIngresado * 950).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "CLP" &&
      opcionSeleccionadaHacia == "USD"
    ) {
      const montoCambiado = (valorIngresado / 950).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "USD" &&
      opcionSeleccionadaHacia == "EURO"
    ) {
      const montoCambiado = (valorIngresado * 0.94).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "CLP" &&
      opcionSeleccionadaHacia == "EURO"
    ) {
      const montoCambiado = (valorIngresado * 0.100438).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "EURO" &&
      opcionSeleccionadaHacia == "USD"
    ) {
      const montoCambiado = (valorIngresado * 1.066615).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "EURO" &&
      opcionSeleccionadaHacia == "CLP"
    ) {
      const montoCambiado = (valorIngresado * 995.32).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "USD" &&
      opcionSeleccionadaHacia == "BITCOIN"
    ) {
      const montoCambiado = (valorIngresado * 0.000032597).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "CLP" &&
      opcionSeleccionadaHacia == "BITCOIN"
    ) {
      const montoCambiado = (valorIngresado * (1 / 30584110)).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "EURO" &&
      opcionSeleccionadaHacia == "BITCOIN"
    ) {
      const montoCambiado = (valorIngresado * 0.000034276).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "BITCOIN" &&
      opcionSeleccionadaHacia == "USD"
    ) {
      const montoCambiado = (valorIngresado * 32781).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "BITCOIN" &&
      opcionSeleccionadaHacia == "CLP"
    ) {
      const montoCambiado = (valorIngresado * 30584110).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    } else if (
      opcionSeleccionadaDesde == "BITCOIN" &&
      opcionSeleccionadaHacia == "EURO"
    ) {
      const montoCambiado = (valorIngresado * 30728).toFixed(2);
      stringMonedaRetornado += montoCambiado;
    }
  }
  return stringMonedaRetornado;
}

botonConvertirMonedas.addEventListener("click", () => {
  if (
    monedasDesde.value == "Selecciona Desde" ||
    monedasHacia.value == "Selecciona Hacia"
  ) {
    Swal.fire({
      icon: "error",
      title: "Ha ocurrido un error",
      text: "Debes seleccionar una conversión desde ambas listas",
    });
  } else {
    if (inputMoneda.value == "") {
      Swal.fire({
        icon: "warning",
        title: "El input esta vacío",
        text: "Debes ingresar un número",
      });
    } else {
      if (nombre.value == "") {
        Swal.fire({
          icon: "warning",
          title: "El campo Nombre esta vacío",
          text: "Debes ingresar un nombre",
        });
      } else {
        Swal.fire({
          title: `¡ La conversión se ha realizado con éxito, ${nombre.value} !`,
          text: `El monto que has ingresado se ha convertido a ${convertirMonedas(
            monedasDesde.value,
            monedasHacia.value,
            parseFloat(inputMoneda.value)
          )}`,
          imageUrl: "./minions.gif", // URL de la imagen
          imageAlt: "Success", // Texto alternativo de la imagen
          showCancelButton: false, // Sin botón de cancelar
          confirmButtonText: "OK", // Texto del botón OK
          confirmButtonColor: "#4CAF50", // Color verde para el botón OK
        });
      }
    }
  }
});
