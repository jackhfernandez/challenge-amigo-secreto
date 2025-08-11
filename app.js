let amigos = [];

function agregarAmigo() {
  // Captura el valor del campo de entrada
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  // Validar la entrada
  if (nombreAmigo === ''){
    alert('Por favor, inserte un nombre valido.');
    return;
  }

  // Actualiza el array de nombres
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo = '';

  // ..
}
