const SCENE = new Scene({
  FPS : 60,
  layers : {
    'main' : document.getElementById('scene'),
    'background' : document.getElementById('background')
  }
})

const player = new Player();

const starsBackground = new OverlayGraphic({
  css : ["bg_stars"],
  src : "./images/stars.png"
});

new BackgroundFrameAnimation(playerShipAnimation , player);
new Animation(starsAnimation,starsBackground);

SCENE.add(player);
SCENE.add(starsBackground , 'background' );
SCENE.start();
