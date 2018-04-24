var game  = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANEVAS,'');
game.state.add('IntroductionState', Introduction);
game.state.add('GameState', Game);
game.state.add('GameState2', Game2);
game.state.add('ContinuerState', Continuer);
game.state.add('CreditState', Credit);
game.state.add('MenuState', Menu);
game.state.add('Level1State', Level1);
game.state.start('Level1State');
