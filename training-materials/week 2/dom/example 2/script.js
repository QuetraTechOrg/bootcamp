var cours = null;

const prof = "ronice";

const presence = "present";

if (prof == presence) {
  cours = "bootcamp";
} else {
  cours = "impossible";
}

//autre façon
cours = prof == presence ? "bootcamp" : "impossible";

console.log(cours);
