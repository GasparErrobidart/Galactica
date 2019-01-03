const SCENE = new Scene({
  FPS : 60,
  mainStage : document.getElementById('scene')
})

const player = new Player();

const controller = new Controller([
  {
    key : 'ArrowLeft',
    handler : ()=> player.move(new Vector2(-1,0))
  },
  {
    key : 'ArrowRight',
    handler : ()=> player.move(new Vector2(1,0))
  },
  {
    key : 'ArrowUp',
    handler : ()=> player.move(new Vector2(0,-1))
  },
  {
    key : 'ArrowDown',
    handler : ()=> player.move(new Vector2(0,1))
  },
  {
    key : ' ',
    handler : ()=> player.shoot()
  },
  {
    key : 'p',
    once : true,
    handler : ()=>{
      console.log(SCENE);
      if(SCENE.paused){
        SCENE.start();
      }else{
        SCENE.stop();
      }
    }
  }
])

SCENE.add(player);
SCENE.start();

console.log(player);
