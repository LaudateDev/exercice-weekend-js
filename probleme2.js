let tempsCoureur1 = 170;
let tempsCoureur2 = 175;
let tempsCoureur3 = 172;

let plusRapide = tempsCoureur1;
let coureur = "Coureur 1";

if (tempsCoureur2 < plusRapide) {
  plusRapide = tempsCoureur2;
  coureur = "Coureur 2";
}

if (tempsCoureur3 < plusRapide) {
  plusRapide = tempsCoureur3;
  coureur = "Coureur 3";
}

console.log(`Le plus rapide est le ${coureur} avec ${plusRapide} secondes.`);
