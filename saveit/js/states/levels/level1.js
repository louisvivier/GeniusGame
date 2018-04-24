//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Pour les murs
var wallStorage = [];

var Level1 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.create();

    //Ajout des élements
    //Bureau
    Appliances.fenetre.create(100,0,2,0);
    Appliances.fenetre.create(500,0,4,1);
    Appliances.radiateur.create(475,70,2);
    Appliances.radiateur.create(75,70,3);
    Appliances.ordinateur.create(275,60,4);
    Appliances.lampe.create(800,350,'jaune',5);
    Furnitures.armoire.create(650,-20,'facelivre',6);
    Decorations.plante.create(50,400,'4',7);
    //SDB
    Appliances.fenetre.create(1200,0,1,8);
    Appliances.fenetre.create(1750,0,3,9);
    Appliances.radiateur.create(1175,70,10);
    Appliances.radiateur.create(1725,70,11);
    Appliances.lavabo.create(1475,30,12);
    Appliances.baignoire.create(1800,200,13);
    Appliances.machinealaver.create(1050,300,14);
    Decorations.plante.create(1910,310,'1',15);
    Decorations.tapis.create(1400,200,'beige',300,200,16);

    //Ajout du perso
    Perso.louis.create();


  },
  update : function (){
    //Update du perso
    Perso.louis.update();

    MapGen.update();

    Appliances.fenetre.update(Keys.F(),0);
    Appliances.fenetre.update(Keys.F(),1);
    Appliances.radiateur.update(Keys.R(),2);
    Appliances.radiateur.update(Keys.R(),3);
    Appliances.ordinateur.update(Keys.O(),4);
    Appliances.lampe.update(Keys.L(),5);
    Furnitures.armoire.update(6);
    //Decorations.plante.update(7);

    Appliances.fenetre.update(Keys.F(),8);
    Appliances.fenetre.update(Keys.F(),9);
    Appliances.radiateur.update(Keys.R(),10);
    Appliances.radiateur.update(Keys.R(),11);
    Appliances.lavabo.update(Keys.L(),12);
    Appliances.baignoire.update(Keys.B(),13);
    Appliances.machinealaver.update(Keys.M(),14);
    //Decorations.plante.update(15);
    Decorations.tapis.update(16);

  },
  render :function() {
    //Debug
    //game.debug.cameraInfo(game.camera, 32, 32);

  }
}
