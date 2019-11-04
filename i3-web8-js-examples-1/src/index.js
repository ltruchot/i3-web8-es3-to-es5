// les données ont été mise dans un fichier à part pour plus de lisibilité
// on les importe comme ceci (ES6+)
import { animaux } from './data';

// afficher un array JS dans la console
console.table(animaux);

// rendre le style de fond du body "bleu ciel"
document.body.style.backgroundColor = 'lightblue';

// pour chaque animaux, creer un paragraphe stylé
var count = 0;
for (var animal of animaux) {
  var p = document.createElement('p');
  p.innerText = animal.nom;
  p.style.borderBottom = '2px dotted lightgrey';
  p.style.backgroundColor = count % 2 === 0 ? 'grey' : 'white';
  document.body.appendChild(p);
  count++;
}

// creer deux listes
var liste1 = ['la courgette', 'la tomate'];
var liste2 = ["l'aubergine", 'le navet'];
// les combiner (concat), puis filtrer (filter), puis transformer (map)
var liste3 = liste1
  .concat(liste2)
  .filter(function (el) {
    return el !== 'la tomate';
  })
  .map(function (el) {
    return "j'aime " + el;
  });

// et enfin logguer le résultat
console.log(liste3);

// une collection de résumés de courses par ville
var courses = [
  { ville: 'bruxelles', distances: [10, 13, 9, 23, 21, 5] },
  { ville: 'paris', distances: [8, 18, 19, 11] },
  { ville: 'vientiane', distances: [6, 3, 2, 5] },
];

// fonction pour additionner distances de chaques course dans chaque ville
// decompter :: courses -> number
function decompter(arr) {
  var total = 0;
  for (var course of arr) {
    for (var distance of course.distances) {
      total += distance;
    }
  }
  return total;
}
// execution de la fonction
var compte = decompter(courses);
// affichage du résultat
console.log('bravo, tu as parcouru ' + compte + 'km');

// une fonction pour saluer différemment selon l'heure
// saluer :: number -> string
function saluer(hour) {
  var salutation = 'bonjour';
  if (hour <= 6 || hour >= 22) {
    salutation = 'bonne nuit les petits';
  }
  if (hour >= 16 && hour <= 22) {
    salutation = 'bonsoir';
  }
  // si il est 12 ou 19 heure, on rajoute "bon appétit"
  if (hour === 12 || hour === 19) {
    salutation += ' bon appétit';
  }
  return salutation;
}
// l'heure courante (mais seulement le chiffre de l'heure)
var h = new Date().getHours();

// tester la fonction
console.log(saluer(h), saluer(1), saluer(12), saluer(8));

// le quizz avec window.prompt, et window.alert
var quizz = [
  { q: 'Quelle est la capitale du Laos ?', r: 'Vientiane' },
  { q: 'Quelle est la capitale de la Belgique ?', r: 'Bruxelles' },
  { q: 'Quelle est la capitale de la France ?', r: 'Paris' },
];
var score = 0;

// version programmation procedurale
/*
for (var i = 0; i < quizz.length; i++) {
  var reponse = prompt(quizz[i].q);
  if (reponse === quizz[i].r) {
    alert('bravo');
    score++;
  } else {
    alert('looser');
  }
}
*/

// version programmation fonctionnelle
/*
quizz.forEach(function (toto) {
  var r = prompt(toto.q);
  alert(r === toto.r ? 'bravo' : 'wrong');
  score = r === toto.r ? score + 1 : score;
});
*/
var resultat = document.getElementById('resultat');
resultat.innerText = score + ' / ' + quizz.length;

// bousiller les méthodes natives de window
/*
// déclaration
window.console.log = function() {
  alert("troll !");
};
// éxécution
console.log("toto");
console = "";
*/

// exemple de méthodes enchainées
/*
var empty = [undefined, null];
var primitives = ["Quelle est la taille du rayon de la terre", 6371, true];
var objects = [{}, [], function() {}];
console.log(
  empty
    .concat(primitives)
    .concat(objects)
    .map(function(type) {
      return typeof type;
    })
    .join(",")
);

*/
