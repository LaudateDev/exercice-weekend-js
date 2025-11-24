let ingredients = ["farine", "sucre", "sel", "beurre", "lait"];

let recherche = "sucre";

let trouve = false;

for (let i = 0; i < ingredients.length; i++) {
  if (ingredients[i] === recherche) {
    trouve = true;
  }
}

console.log(
  trouve
    ? `L'ingrédient ${recherche} se trouve dans la liste`
    : `L'ingrédient ${recherche} ne se trouve pas dans la liste`
);
