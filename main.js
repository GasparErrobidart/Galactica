const SCENE = new Scene({
  FPS : 60,
  layers : {
    'main' : document.getElementById('scene'),
    'background' : document.getElementById('background')
  }
})

const player = new Player();
player.position = new Vector2(250,550);

const enemy = new Ship();
enemy.position = new Vector2(250,350);

const starsBackground = new OverlayGraphic({
  css : ["bg_stars"],
  src : "/images/stars.png"
});

const saturn = new Graphic({
  css : ["saturn"],
  src : "/images/sprite-1.png"
});

new BackgroundFrameAnimation(playerShipAnimation , player);
new Animation(starsAnimation,starsBackground);
new Animation(saturnAnimation,saturn);

SCENE.add(player);
SCENE.add(enemy);
SCENE.add(starsBackground , 'background' );
SCENE.add(saturn , 'background' );
SCENE.start();
