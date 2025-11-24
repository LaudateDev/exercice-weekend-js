let notes = [12, 15, 10, 18, 14];

let somme = 0;
for (let i = 0; i < notes.length; i++) {
  somme = somme + notes[i];
}

let moyenne = somme / notes.length;

console.log(`La moyenne de l'élève est :  ${moyenne}`);
