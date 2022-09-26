import hollowFoto from "../assets/images/hollowknight.jpg";
import tfFoto from "../assets/images/tf2.jpg";
import ultraFoto from "../assets/images/ultrakill.jpg";
import eternalFoto from "../assets/images/doometernal.jpg";

const juegos = [
  {
    id: 367520,
    favorito: "favoritos",
    nombre: "Hollow Knight",
    precio: "AR$" + 179.99,
    photo: hollowFoto,
    descripcion:
      "¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado a mano.",
  },
  {
    id: 440,
    favorito: "favoritos",
    nombre: "Team Fortress 2",
    precio: "Gratis",
    photo: tfFoto,
    descripcion:
      "Nueve clases diferentes ofrecen una amplia variedad de habilidades tácticas y personalidades. Constantemente actualizado con nuevos modos de juego, mapas, equipamiento y, lo que es más importante, ¡sombreros!",
  },
  {
    id: 1229490,
    favorito: "favoritos",
    nombre: "ULTRAKILL",
    precio: "AR$" + 279.99,
    photo: ultraFoto,
    descripcion:
      "ULTRAKILL es un FPS retro ultraviolento de ritmo rápido que combina el estilo de puntuación basado en habilidades de los juegos de acción de personajes con una carnicería sin adulterar inspirada en los mejores tiradores de los años 90. Destroza a tus enemigos con variadas armas destructivas y báñate en su sangre para recuperar tu salud.",
  },
  {
    id: 782330,
    favorito: "no",
    nombre: "Doom Eternal",
    precio: "AR$" + 3499,
    photo: eternalFoto,
    descripcion:
      "Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones para detener la destrucción definitiva de la humanidad. No le tienen miedo a nada... salvo a ti.",
  },
];
export default juegos