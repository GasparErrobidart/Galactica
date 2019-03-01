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

const bgMusic = new Audio('/mp3/bg-1.wav');
bgMusic.loop = true;
bgMusic.play();
// testSound.loop = true;
// testSound.play();

function spawnEnemy(){
  let enemy = new RedShip();
  new BackgroundFrameAnimation(redShipAnimation , enemy);
  enemy.position = new Vector2(
    randomRange(0,SCENE.layers.main.rect.width()-enemy.rect.width()),
    0
  );
  new BoxCollider(enemy);
  SCENE.add(enemy);
  setTimeout(spawnEnemy,randomRange(300,1000))
}

spawnEnemy();

SCENE.add(player);
SCENE.add(starsBackground , 'background' );
SCENE.add(saturn , 'background' );
SCENE.start();
