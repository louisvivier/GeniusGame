//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];
var spriteOnMap = [];

//Pour les murs
var wallStorage = [];

//Pour Timer
var turnon;
var coutobjprecedent;
var total;

var Level2 = {

  create : function() {
    //Reinitialisation des variables
    spriteStorage = [];
    stateStorage = [];
    flipFlop =[];
    spriteOnMap = [];
    wallStorage = [];
    turnon = 0;
    coutobjprecedent=0;

    //Definition des difficultées
    total=40;
    tempsrestant=50;

    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.couloir.create();
    MapGen.cuisine.create();
    MapGen.salon.create();
    Walls.vertical.create(0,0,'noir',910,500,31);//gauche
    Walls.vertical.create(1100,0,'noir',910,1000,32);//droite

    //Ajout du perso
    Perso.louis.create(300,600);

    //Recherche Objets Actifs
    for (let i of spriteStorage){
      if (typeof i !== 'undefined' && i.custCtrl == true){
        spriteOnMap.push(i.custId);
      }
      else{}
    };

    //Popup
    setTimeout(function () {Popup.create('evierinfo',300,400);}, 1000);

    menuPause('Level2State');

    //Debut du jeu
    timers.create();
  },
  update : function (){
    timers.updateText();

    //Update du perso
    Perso.louis.update();

    //Update de la Map
    MapGen.cuisine.update();
    MapGen.couloir.update();
    MapGen.salon.update();
    Walls.vertical.update(31);
    Walls.vertical.update(32);

    gameOver('Level2State', tempsrestant, total);
  }
}
