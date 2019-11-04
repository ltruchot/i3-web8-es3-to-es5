export var animaux = [
  {
    nom: 'la coccinelle',
    poids: 2,
    couleur: 'rouge et noire',
    taille: 0.5,
    // nourriture: ["l'herbe", 'les fleurs', 'les pucerons'],
    afficherDescription() {
      return (
        this.nom
        + ' est '
        + this.couleur
        + ' pèse '
        + this.poids
        + ' grammes et mesure '
        + this.taille
        + ' centimètres.'
      );
    },
  },
  {
    nom: 'Mon chat',
    poids: 5,
    taille: 60,
    couleur: 'brown-tiger',
    afficherDescription() {
      return (
        'Nom: '
        + this.nom
        + '/poids: '
        + this.poids
        + +'/ taille: '
        + this.taille
        + '/ couleur: '
        + this.couleur
        + '.'
      );
    },
  },
  {
    nom: "L'okapi",
    poids: 200,
    taille: 180,
    couleur: 'multicolore',
    afficherDescription() {
      return (
        this.nom
        + ' mesure '
        + this.taille
        + 'cm et pèse '
        + this.poids
        + 'kg. Il est '
        + this.couleur
        + '.'
      );
    },
  },
  {
    nom: 'le crocodile',
    poids: 200,
    taille: 300,
    couleur: 'vert',
    afficherDescription() {
      return (
        this.nom
        + ' est '
        + this.couleur
        + '. Il pèse '
        + this.poids
        + 'kg et il mesure '
        + this.taille
        + 'cm'
      );
    },
  },
  {
    nom: 'Kenzo',
    poids: 35,
    taille: 30,
    couleur: 'noir',
    afficherDescription() {
      return (
        "Le chien s'appelle "
        + this.nom
        + ', pèse'
        + this.poids
        + 'kg, '
        + 'mesure'
        + this.taille
        + 'cm, '
        + 'et est de couleur : '
        + this.couleur
      );
    },
  },
  {
    nom: 'le tigre',
    poids: 310,
    taille: 120,
    couleur: 'brun',
    afficherDescription() {
      return (
        'Mon animal est un '
        + this.nom
        + 'Il pese '
        + this.poids
        + 'kg'
        + 'Il mesure '
        + this.taille
        + 'cm'
        + 'il est de couleur '
        + this.couleur
      );
    },
  },
  {
    nom: 'Un Pikachu',
    poids: 3,
    taille: 60,
    couleur: 'jaune',
    afficherDescription() {
      return (
        this.nom
        + ' fait '
        + this.poids
        + ' kg, '
        + ' mesure '
        + this.taille
        + ' cm '
        + ' et qui est de couleur '
        + this.couleur
      );
    },
  },
  {
    nom: 'bee',
    poids: 1,
    taille: 50,
    couleur: 'yellow',
    afficherDescription() {
      return this.nom + ' ' + this.colour;
    },
  },
];
