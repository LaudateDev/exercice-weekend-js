let panier = ["rouge", "vert", "rouge", "jaune", "rouge", "rouge"];
let compteur = 0;
for (let i = 0; i < panier.length; i++) {
  if (panier[i] === "rouge") {
    compteur += 1;
  }
}
console.log(`Nombre de pommes rouges : ${compteur}`);
