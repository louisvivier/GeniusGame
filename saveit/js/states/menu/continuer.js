var Continuer = {

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var boutonRetour = game.add.button(game.width -50, game.height/1.20, 'retour', this.retourMenu, this, 1, 0);
    var boutonNiveau1 = game.add.button((game.width/2) -50, game.height/2.50, 'niveau1', this.accesNiveau1, this, 1, 0);
    var boutonNiveau2 = game.add.button((game.width/2)+50, game.height/2.50, 'niveau2', this.accesNiveau2, this, 1, 0);
    var boutonNiveau3 = game.add.button((game.width/2)-50, game.height/1.90, 'niveau3', this.accesNiveau3, this, 1, 0);
    var boutonNiveau4 = game.add.button((game.width/2)+50, game.height/1.90, 'niveau4', this.accesNiveau4, this, 1, 0);
    var boutonNiveau5 = game.add.button(game.width/2, game.height/1.53, 'niveau5', this.accesNiveau5, this, 1, 0);
    boutonNiveau1.anchor.x = 1;
    boutonNiveau2.anchor.x = 0;
    boutonNiveau3.anchor.x = 1;
    boutonNiveau4.anchor.x = 0;
    boutonNiveau5.anchor.x = 0.5;
    boutonRetour.anchor.x = 1;
    boutonNiveau1.scale.setTo(game.height/750);
    boutonNiveau2.scale.setTo(game.height/750);
    boutonNiveau3.scale.setTo(game.height/750);
    boutonNiveau4.scale.setTo(game.height/750);
    boutonNiveau5.scale.setTo(game.height/750);
    boutonRetour.scale.setTo(game.height/750);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  },

  accesNiveau1 : function(){
    game.state.start('Level1State');
  },

  accesNiveau2 : function(){
    game.state.start('Level2State');
  },

  accesNiveau3 : function(){
    game.state.start('Level3State');
  },

  accesNiveau4 : function(){
    game.state.start('Level4State');
  },

  accesNiveau5 : function(){
    game.state.start('Level5State');
  }
}
