let pais = prompt("¿Que pais desea visitar?");
const ticket = "aqui está su ticket";

while (pais != "") {
  switch (pais.toUpperCase()) {
    case "COLOMBIA":
      const pasajes = prompt("Cuantos pasajes desea?");
      if (pasajes < 3) {
        alert(ticket)
        pais = "";
      } else {
        const plata = prompt("No querés ir a Mar de plata");
        if (plata.toUpperCase() != "SI") {
          alert("Lo sentimos, no hay disponible la cantidad de pasajes requeridos")
          pais = ""
        } else {
          alert(ticket)
          pais = "";
        }
      }
      break;
    case "MAR DE PLATA":
      alert(ticket)
      pais = "";
      break;
    default:
      alert("Este pais no tiene pasajes disponibles");
      pais = prompt("¿Que pais desea visitar?");
      break;
  }
}
