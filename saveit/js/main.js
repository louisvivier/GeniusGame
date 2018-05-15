var game  = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANEVAS,'');
game.state.add('BootState', Boot);
game.state.add('PreloadState', Preload);
game.state.add('IntroductionState', Introduction);
game.state.add('ContinuerState', Continuer);
game.state.add('CreditState', Credit);
game.state.add('MenuState', Menu);
game.state.add('Level1State', Level1);
game.state.add('Level2State', Level2);
game.state.add('Level3State', Level3);
game.state.add('Level4State', Level4);
game.state.add('Level5State', Level5);
game.state.start('BootState');
