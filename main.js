const SCENE = new Scene({
  FPS : 60,
  layers : {
    'main' : document.getElementById('scene'),
    'background' : document.getElementById('background'),
    'ui' : document.getElementById('UI')
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

const enemyGenerator = new EnemyGenerator();


const scoreUI = new TextUI({text : "SCORE<br>000000000000" , name : "score"});


SCENE.on("pause",()=>{
  console.log("Pause made")
});

SCENE.add(enemyGenerator);
SCENE.add(scoreUI, "ui");
SCENE.add(player);
SCENE.add(starsBackground , 'background' );
SCENE.add(saturn , 'background' );
SCENE.start();
