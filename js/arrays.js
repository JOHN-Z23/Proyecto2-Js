function marcaCelulares(val) {
    let result = "";

    let celular = {
      "Motorola": "G90",
      "Iphone": "XX",
      "Samsung": "Z90",
      "Nokia": "L50",
    };
    result = celular[val];

    return result;
  }
  console.log(marcaCelulares("Nokia"));