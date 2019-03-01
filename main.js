const SCENE = new Scene({
  FPS : 60,
  layers : {
    'main' : document.getElementById('scene'),
    'background' : document.getElementById('background')
  }
})

const player = new Player();
player.position = new Vector2(250,550);
new BoxCollider(player);

const enemy = new RedShip();
enemy.position = new Vector2(250,350);
new BoxCollider(enemy);

const starsBackground = new OverlayGraphic({
  css : ["bg_stars"],
  src : "/images/stars.png"
});

const saturn = new Graphic({
  css : ["saturn"],
  src : "/images/sprite-1.png"
});

new BackgroundFrameAnimation(playerShipAnimation , player);
new BackgroundFrameAnimation(redShipAnimation , enemy);
new Animation(starsAnimation,starsBackground);
new Animation(saturnAnimation,saturn);

const bgMusic = new Audio('/mp3/bg-1.wav');
bgMusic.loop = true;
// bgMusic.play();
// testSound.loop = true;
// testSound.play();

SCENE.add(player);
SCENE.add(enemy);
SCENE.add(starsBackground , 'background' );
SCENE.add(saturn , 'background' );
SCENE.start();
