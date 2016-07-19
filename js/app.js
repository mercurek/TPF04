// Code du TPF02
/* var liste;

function nouvelleTransaction(){
    liste = [];
}

function commanderCafe(nomDuCafe){ //tu ajoutes un paramètres (c'est commme une variable locale)
    liste.push(nomDuCafe); //ajout un cafe
}

//commanderCafe("cafe 1")
//commanderCafe("cafe 2")
//commanderCafe("cafe 3")

function lecturePremierCafe(){
    var premierCafe = liste.shift(); // retourne une valeur et la supprime ensuite
    return premierCafe;
}

function terminerTransaction() {
    liste = undefined;
}
*/

//Code du TPF03
//Partie 1 - Création de cinq objets Coffee (fonction littérale)
var coffeeColombien = {
nom: "Colombien",
nbLait: 2,
nbSucre: 3,
prix: 2.5,
nomCommandeur: "Alexis",
}
console.info(coffeeColombien);


var coffeeMelangeMaison = {
nom: "Mélange maison",
nbLait: 1,
nbSucre: 1,
prix: 2,
nomCommandeur: "Guillaume",
}
console.info(coffeeMelangeMaison);


var coffeeLatte = {
nom: "Latte",
nbLait: 2,
nbSucre: 1,
prix: 2.75,
nomCommandeur: "Dominique",
}
console.info(coffeeLatte);


var coffeeCappuccino = {
nom: "Cappuccino",
nbLait: 1,
nbSucre: 2,
prix: 3.25,
nomCommandeur: "Stéphane",
}
console.info(coffeeCappuccino);


var coffeeMocha = {
nom: "Mocha",
nbLait: 1,
nbSucre: 3,
prix: 3.5,
nomCommandeur: "Doris",
}
console.info(coffeeMocha);


//Partie 2 - Fonction « Constructeur »
//Objets de type « Café »
function afficheCafe(cafe) {
    console.info("Nom: " + cafe.nom);
    console.info("nbLait: " + cafe.nbLait);
    console.info("nbSucre: " + cafe.nbSucre);
    console.info("prix: " + cafe.prix);
    console.info("nomCommandeur:" + cafe.nomCommandeur)
    console.info("--------------------------")
}

function Cafe (nom, nbLait, nbSucre, prix, nomCommandeur){
	this.nom = nom;
	this.nbLait = nbLait;
	this.nbSucre = nbSucre;
	this.prix = prix;
	this.nomCommandeur = nomCommandeur;
}
 
var coffeeColombien = new Cafe("Colombien", 2, 3, 2.5, "Alexis");
var coffeeMelangeMaison = new Cafe("Mélange maison", 1, 1, 2, "Guillaume");
var coffeeLatte = new Cafe("Latte", 2, 1, 2.75, "Dominique");
var coffeeCappuccino = new Cafe("Cappuccino", 1, 2, 3.25, "Stéphane");
var coffeeMocha = new Cafe("Mocha", 1, 3, 3.5, "Doris");


//Objets de type « Transaction »
function Transaction (nomInitiateur){  //On est obligé de savoir qui a fait la nouvelle transaction
    this.listeCommande = []; //0 à plusieurs commandes de cafés
    this.nomInitiateur = nomInitiateur;
    this.debutTransaction = new Date(); //Date = un objet fourni par JS... donc new Date donne la date actuelle sur le poste client
    this.endTransaction = null;
    this.historique = [];

    //Fonction ajouter un cafe et ajouter le cafe dans un historique
    this.ajouterCafe = function(cafe){//Nouvelle méthode à l'objet
        this.listeCommande.push(cafe); //Le this permet d'aller chercher les propriétés/méthodes
    }

    //Fonction commander un cafe
    this.lecturePremierCafe = function (){ //Fonction anonyme
        var cafe = this.listeCommande.shift();
        this.historique.push(cafe);
        return cafe;
    }

    //Fonction finTransaction
    this.finTransaction = function(){
        this.endTransaction = new Date();
        this.listeCommande = [];
    }
}

//Création d'une transaction et ajout d'une commande
//var t1 = new Transaction("Dominique"); //Dominique est l'initiatrice et j'ajoute d'autres cafés dans mon array
//t1.ajouterCafe(new Cafe("Colombien", 2, 3, 2.5, "Alexis"));
//t1.ajouterCafe(new Cafe("Mélange maison", 1, 1, 2, "Guillaume"));
//t1.ajouterCafe(new Cafe("Latte", 2, 1, 2.75, "Dominique"));
//t1.ajouterCafe(new Cafe("Cappuccino", 1, 2, 3.25, "Stéphane"));
//t1.ajouterCafe(new Cafe("Mocha", 1, 3, 3.5, "Doris"));


//Code du TPF04
//Partie 1 - Changement de café par un commandeur 
var commandeur = prompt("Bonjour, quel est votre nom?");
var result = window.confirm(commandeur +", voulez-vous changer votre commande de café?");

if (result = true){
    prompt("Parfait, procédons au changement de votre commande.");
}

//Partie 2 - Lorsque le dernier café est commandé, termine la transaction automatiquement

//Partie 3 - Permettre l'affichage de l'intervalle de temps écoulé lors de la transaction
    //Retourner une chaine de caractères au format « [de date début] à [date fin] ».
    //Assurez-vous de formater votre chaine de caractères afin qu'elle soit facile à lire

var heure = new Date();
document.write("Date de début de la transaction :")
document.write(heure.getHours()+":"+heure.getMinutes()+":"+heure.getSeconds())

document.write("Date de fin de la transaction :")
document.write(endTransaction.getHours()+":"+endTransaction.getMinutes()+":"+endTransaction.getSeconds())

//Partie 4 - Lors de la création d'une transaction par l'initiateur, le système doit lui permettre de passer sa commande immédiatement s'il le désire.
    //Utiliser un prompt pour savoir s'il veut passer sa commande immmédiatement.
//Objets de type « Transaction »
function Transaction (nomInitiateur){  //On est obligé de savoir qui a fait la nouvelle transaction
    passerCommande = promt("Bonjour, souhaitez-vous passer votre commande immmédiatement?");

    this.listeCommande = []; //0 à plusieurs commandes de cafés
    this.nomInitiateur = nomInitiateur;
    this.debutTransaction = new Date(); //Date = un objet fourni par JS... donc new Date donne la date actuelle sur le poste client
    this.endTransaction = null;
    this.historique = [];

    //Fonction ajouter un cafe et ajouter le cafe dans un historique
    this.ajouterCafe = function(cafe){//Nouvelle méthode à l'objet
        this.listeCommande.push(cafe); //Le this permet d'aller chercher les propriétés/méthodes
    }

    //Fonction commander un cafe
    this.lecturePremierCafe = function (){ //Fonction anonyme
        var cafe = this.listeCommande.shift();
        this.historique.push(cafe);
        return cafe;
    }

    //Fonction finTransaction
    this.finTransaction = function(){
        this.endTransaction = new Date();
        this.listeCommande = [];
    }
}



