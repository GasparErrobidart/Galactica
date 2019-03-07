const SCENE = new Scene({
  FPS : 60,
  layers : {
    'main' : document.getElementById('scene'),
    'background' : document.getElementById('background')
  }
})

const METRONOMO = new Tempo({
  bpm : 360,
  beep : true,
  beatSrc : '/mp3/beat.wav',
  compass : 3,
  volume : 0.4
});

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
// bgMusic.play();

function spawnEnemy(){
  let enemy = new RedShip();
  new BackgroundFrameAnimation(redShipAnimation , enemy);
  enemy.position = new Vector2(
    randomRange(0,SCENE.layers.main.rect.width()-enemy.rect.width()),
    0
  );
  new BoxCollider(enemy);
  SCENE.add(enemy);
  // setTimeout(spawnEnemy,randomRange(300,1000))
}

let randomSpawn = parseInt(randomRange(0,3));

METRONOMO.tick.subscribe((tick)=>{
  if(tick.count%[3,6,9,12][randomSpawn] == 0){
    spawnEnemy();
    randomSpawn = parseInt(randomRange(0,3));
  }
})

METRONOMO.start();

SCENE.add(player);
SCENE.add(starsBackground , 'background' );
SCENE.add(saturn , 'background' );
SCENE.start();
