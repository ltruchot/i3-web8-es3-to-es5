// creer une table vide, et la mettre dans le HTML (dans le body)
const table = document.createElement('table');
document.body.appendChild(table);

// céer un liste des jours de la semaine
const jours = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
jours.push('L');

// créer un ligne 1 dans la table
const tr = document.createElement('tr');
table.appendChild(tr);

// pour chaque jour, faire une cellule dans la ligne 1
for (const jour of jours) {
  const td = document.createElement('td');
  tr.appendChild(td);
  // ecrire le jour courant dans cette cellule
  td.innerText = jour;
}

// hobbies
const hobbies = [
  '15 min de balalaïka',
  "1 lecture d'article sur medium",
  '50 abdos',
];

// hobby fait chaque jours de la semaine
const hobbiesDone = [
  [true, true, false, true, false, true, true], // hobby 1
  [false, false, false, false, false, true, true], // hobby 2
  [false, true, false, true, false, true, false], // hobby 3
];

// pour chaque hobby
for (const hobby of hobbiesDone) {
  // creer une nouvelle ligne dans le tableau
  const trHobby = document.createElement('tr');
  table.appendChild(trHobby);

  // pour chaque jour ou le hobby a été fait
  for (const j of hobby) {
    // ajouter une cellule à la ligne
    const tdHobby = document.createElement('td');
    trHobby.appendChild(tdHobby);

    // si j vaut TRUE, mettre une boule dans la cellule, sinon rien
    tdHobby.innerHTML = j ? '&bull;' : '';
    tdHobby.addEventListener('click', function (event) {
      if (event.target.innerHTML.toLowerCase() === '•') {
        event.target.innerHTML = '';
      } else {
        event.target.innerHTML = '&bull;';
      }
    });
  }
}
