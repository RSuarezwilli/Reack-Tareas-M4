let nuevoDiv = document.createElement("div")
nuevoDiv.id = "miDiv";

let texto = document.createTextNode("Este es un texto dentro del div.");
nuevoDiv.appendChild(texto);

document.body.appendChild(nuevoDiv);

