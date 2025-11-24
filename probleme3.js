let carton = [
  "gauche",
  "droite",
  "gauche",
  "droite",
  "gauche",
  "droite",
  "gauche",
];

let chaussuresGauche = [];
let chaussuresDroite = [];

for (let i = 0; i < carton.length; i++) {
  if (carton[i] === "gauche") {
    chaussuresGauche.push(carton[i]);
  } else if (carton[i] === "droite") {
    chaussuresDroite.push(carton[i]);
  }
}

console.log("Nombre de chaussures gauches :", chaussuresGauche.length);
console.log("Nombre de chaussures droites :", chaussuresDroite.length);
