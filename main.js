const SCENE = new Scene({
  FPS : 60,
  layers : {
    'main' : document.getElementById('scene'),
    'background' : document.getElementById('background'),
    'ui' : document.getElementById('UI')
  }
})

const SCORE_BOARD = new Score();

const player = new Player();
player.position = new Vector2(250,550);
new BoxCollider(player);

const background = new Graphic({
  css : ["bg_layer-0","overlay","graphic"],
  src : "/images/bg-3.jpg"
});
const starsBackground = new OverlayGraphic({
  css : ["bg_stars"],
  src : "/images/stars.png"
});
const starsBackgroundFront = new OverlayGraphic({
  css : ["bg_stars"],
  src : "/images/stars-front.png"
});

// const saturn = new Graphic({
//   css : ["saturn"],
//   src : "/images/sprite-1.png"
// });

new BackgroundFrameAnimation(playerShipAnimation , player);

new Animation(starsAnimation(0.2),starsBackground);
new Animation(starsAnimation(10),starsBackgroundFront);
// new Animation(saturnAnimation,saturn);

const bgMusic = new Audio('/mp3/bg-1.wav');
bgMusic.loop = true;
bgMusic.play();
// testSound.loop = true;
// testSound.play();

const enemyGenerator = new EnemyGenerator();

const pauseUI = new TextUI({text : "<span>PAUSE</span>" , name : "pause"});
pauseUI.hide();


SCENE.on("pause",()=>{
  pauseUI.show();
});

SCENE.on("play",()=>{
  pauseUI.hide();
});


SCENE.add(pauseUI, "ui");

SCENE.add(enemyGenerator);
SCENE.add(player);

SCENE.add(background , 'background' );
SCENE.add(starsBackground , 'background' );
SCENE.add(starsBackgroundFront , 'background' );
// SCENE.add(saturn , 'background' );
SCENE.start();
