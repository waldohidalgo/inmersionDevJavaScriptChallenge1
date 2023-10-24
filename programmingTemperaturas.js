(function () {
  const inputTemperatura = document.getElementsByClassName(
    "contenedor_temperaturas__input__input"
  )[0];
  const temperaturasDesde = document.getElementById("temperaturasDesde");
  const temperaturasHacia = document.getElementById("temperaturasHacia");
  const botonConvertirTemperaturas = document.getElementById(
    "convertir_temperaturas"
  );

  const nombre = document.getElementById("contenedor_nombre_input");

  function convertirTemperaturas(
    opcionSeleccionadaDesde,
    opcionSeleccionadaHacia,
    valorIngresado
  ) {
    let stringTemperaturaRetornado = opcionSeleccionadaHacia + " ";
    if (opcionSeleccionadaDesde == opcionSeleccionadaHacia) {
      stringTemperaturaRetornado += valorIngresado;
    } else {
      if (
        opcionSeleccionadaDesde == "CELSIUS" &&
        opcionSeleccionadaHacia == "FAHRENHEIT"
      ) {
        const montoCambiado = (valorIngresado * (9 / 5) + 32).toFixed(2);
        stringTemperaturaRetornado += montoCambiado;
      } else if (
        opcionSeleccionadaDesde == "CELSIUS" &&
        opcionSeleccionadaHacia == "KELVIN"
      ) {
        const montoCambiado = (valorIngresado + 273.15).toFixed(2);
        stringTemperaturaRetornado += montoCambiado;
      } else if (
        opcionSeleccionadaDesde == "FAHRENHEIT" &&
        opcionSeleccionadaHacia == "CELSIUS"
      ) {
        const montoCambiado = ((valorIngresado - 32) / 1.8).toFixed(2);
        stringTemperaturaRetornado += montoCambiado;
      } else if (
        opcionSeleccionadaDesde == "FAHRENHEIT" &&
        opcionSeleccionadaHacia == "KELVIN"
      ) {
        const montoCambiado = ((valorIngresado - 32) / 1.8 + 273.15).toFixed(2);
        stringTemperaturaRetornado += montoCambiado;
      } else if (
        opcionSeleccionadaDesde == "KELVIN" &&
        opcionSeleccionadaHacia == "CELSIUS"
      ) {
        const montoCambiado = (valorIngresado - 273.15).toFixed(2);
        stringTemperaturaRetornado += montoCambiado;
      } else if (
        opcionSeleccionadaDesde == "KELVIN" &&
        opcionSeleccionadaHacia == "FAHRENHEIT"
      ) {
        const montoCambiado = (1.8 * (valorIngresado - 273.15) + 32).toFixed(2);
        stringTemperaturaRetornado += montoCambiado;
      }
    }
    return stringTemperaturaRetornado;
  }

  botonConvertirTemperaturas.addEventListener("click", () => {
    if (
      temperaturasDesde.value == "Selecciona Desde" ||
      temperaturasHacia.value == "Selecciona Hacia"
    ) {
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: "Debes seleccionar una conversión desde ambas listas",
      });
    } else {
      if (inputTemperatura.value == "") {
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
            text: `El monto que has ingresado se ha convertido a ${convertirTemperaturas(
              temperaturasDesde.value,
              temperaturasHacia.value,
              parseFloat(inputTemperatura.value)
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
})();
