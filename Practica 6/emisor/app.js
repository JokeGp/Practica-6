const Emitter = require(`./emitter`);

const emtr = new Emitter();

emtr.on(`saludo`, () => {
  console.log(`como estas`);
});

emtr.on(`saludo`, () => {
  console.log(`y los chavillos`);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`te voy a cantar va?....`);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`turun tururururururun turururarararan turarararararan`);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`
  ¿Sabes qué es la inseguridad?
  ¿Sabes lo que es sentir la soledad?
  Mi peor error fue haber aceptado mi fealdad
  
  `);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`
  Porque ahora ya no tengo dónde esconder el miedo
  Y el miedo sigue vivo; se la vive aquí conmigo
  Yo me baso en la apariencia, con placer y sin conciencia
  Espero que algún día, tu atención fijes en mí
  
  `);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`
  Es por eso que ahora visto así
  Quiero ser elegante y estilero hasta el fin
  No podré proyectarlo; me lo tengo que creer
  
  `);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`
  Suponiendo que en la gente la belleza es natural
  Pues belleza es la palabra que aún no logro concretar
  
  `);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`
  Disfraz, disfraz
  Narcisista artificial
  
  `);
});

emtr.on(`teVoy_A_CantarCarnal`, () => {
  console.log(`
  Disfraz, disfraz
  Todo es mental
  
  `);
});

console.log(`kiubo`);
emtr.emit(`saludo`);
emtr.emit(`teVoy_A_CantarCarnal`);

// lo que entiendo es que checa si esta la funcion en emtr
// luego la empuja y la guarda en el objeto creado emtr
// y luego la invoca
// aqui nosotros estamos creando las funcinoes que van a
// ser checadas en el emmiter y las estamos pidiendo
// cómo se llaman igual las guarda y las llama en orden
// pd. aproveché el bug

emtr.on(`Jump`, () => {
  console.log(`Alguien brincó`);
});

console.log(emtr);
emtr.emit("jump");
// aquí emtr es cómo si fuera un objeto con varios paraetros
// los cuales dentro de un array guardan varias funciones anonymas
// es utíl para darle varias funcionalidades a algo
// utilizando una palabra para indicar el evento.
