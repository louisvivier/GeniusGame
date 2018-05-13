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
coutobjprecedent=0;
var total;

var Level1 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    total=20;
    tempsrestant=50;


    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.couloir.create();
    MapGen.salon.create();

    //Ajout du perso
    Perso.louis.create(1400,1200);

    for (let i of spriteStorage){
      if (typeof i !== 'undefined' && i.custCtrl == true){
        spriteOnMap.push(i.custId);
      }
      else{}
    };
    setTimeout(function () {Popup.create('tvinfo',1600,1100);}, 1000);
    menuPause('Level1State');
    //Debut du jeu
    timers.create();
  },
  update : function (){
    timers.updateText();

    //Update du perso
    Perso.louis.update();

    MapGen.couloir.update();
    MapGen.salon.update();

    gameOver('Level1State', tempsrestant, total);
  },

  render :function() {
    //Debug
    //game.debug.cameraInfo(game.camera, 32, 32);
    //game.debug.body(spriteStorage[62]);
    //game.debug.text('Argent restant: ' + total.toFixed(2) + '€', 1000 , 64);
    //game.debug.text('Temps restant: ' + tempsrestant + ' s', 100 , 64);
  }
}
