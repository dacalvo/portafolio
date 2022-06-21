var contador = 0;
var data = [
  {
    title: "Compartir en Familia",
    contenido:`
    El compartir en familia es una parte esencial para mí, ayuda a unir los lazos familiares y a fortalecer la relación
    salir a pasear, comer un helado ver películas, contar historias, ir a practicar un deporte se vuelve parte fundamental
    de mi vida, conocer un sitio de interés familiar, la familia es una parte valioso a la cual le debemos aportar tiempo y dedicación. 
    `
  },
  {
    title: "Obtener Conocimiento",
    contenido:`
    También es parte fundamental en mi vida en tiempos libres tratar siempre de aprovechar estos espacios para adquirir nuevos conocimientos, empezar un curso y mantenerme actualizado, es importante actualizar los conocimientos en el campo tecnológico practicar y crear laboratorios.
    `
  },
  {
    title: "Lectura",
    contenido:`
    Cuando no estoy realizando un paseo familiar o compartiendo en familia o realizando algún curso, tomo un tiempo para acudir a la lectura, me fascinan los libros de ciencia, como Frankenstein, el triángulo de las Bermudas entre muchos otros también suelo leer muchos libros técnicos para nuestra área.
    `
  }
];
$(function () {
  //elementos para el type 
  AOS.init();
  new TypeIt("#nombreIng", {
    speed: 50,
    strings: 'Ingeniero de sistemas.',
    afterComplete: function (instance) {
      instance.destroy();
    }
  })
    .pause(1000)
    .go();

  //llamo la funcion que carga el hobby
  $('.card-title').html(data[0].title);
  $('.card-text').html(data[0].contenido);
});

//funcion que se encarga de llamar los mensajes del hobby
function hobbydata() {
let dataTotal=this.data.length-1;
if(contador == 0){
  contador++;
  $('.card-title').html(data[contador].title);
  $('.card-text').html(data[contador].contenido);
}else if(contador <= dataTotal){
  contador++;
  $('.card-title').html(data[contador].title);
  $('.card-text').html(data[contador].contenido);
}else if(contador == this.data.length){
  contador=dataTotal;
}
}


function retrocederHobby() {

  if (contador > -1) {
    contador--
    $('.card-title').html(data[contador].title);
    $('.card-text').html(data[contador].contenido);
    $('.card-body').addClass('animate__animated animate__fadeInBottomRight');
  }else if(contador < 1 || contador == " ") {
    contador=0;
  }
}