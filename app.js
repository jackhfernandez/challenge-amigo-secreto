let amigos = [];

function agregarAmigo() {
  // Captura el valor del campo de entrada
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Validar la entrada
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre valido.");
    return;
  }

  // Actualiza el array de nombres
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista visual
  mostrarAmigos();
}

function mostrarAmigos() {
  // Obtener nombres de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo usando bucle for
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];

    // Agregar nombre a la lista
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista. Por favor, añade algunos nombres.");
    return;
  }

  // Generar un indice aleatorio
  const nombreAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[nombreAleatorio];

  // Mostrar resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}

// Agregar con enter
function agregarConEnter(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
}

// Agregar el event listener cuando se carga la pagina
document.addEventListener("DOMContentLoaded", function () {
  const inputAmigo = document.getElementById("amigo");
  inputAmigo.addEventListener("keypress", agregarConEnter);
});
