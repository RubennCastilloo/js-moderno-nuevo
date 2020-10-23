const producto = "Monitor 20 pulgadas ";

// .repeater te va a permitir repetir una cadena de texto...

const texto = ' en promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = "Estoy aprendiendo javascript moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, aprender a programar';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo JavaScript Moderno #JSModernoConRuben';
console.log(tweet.split('#'));