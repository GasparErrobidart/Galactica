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
      if(SCENE.paused){
        SCENE.start();
      }else{
        SCENE.stop();
      }
    }
  }
])
