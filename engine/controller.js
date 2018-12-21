function Controller(map){

  this.map = {};
  this.pressed = {};

  map.forEach(command => {
    this.map[command.key] = {};
    let action = this.map[command.key];
    action = Object.assign({},command);

    console.log("command",command);

    action.__handler = (ev)=>{
      if(this.pressed[ev.key]){
        action.handler(ev);
        setTimeout(()=>
          action.__handler(ev),
          1000/SCENE.FPS
        );
      }
    }

    window.addEventListener('keydown',action.__handler);
  });

  window.addEventListener('keydown', (ev)=>{
      this.pressed[ev.key] = true;
  });

  window.addEventListener('keyup', (ev)=>{
      this.pressed[ev.key] = false;
  });

}
