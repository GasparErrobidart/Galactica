class Controller{

  constructor(map){
    this.map = {};
    this.pressed = {};

    map.forEach(command => {
      this.map[command.key] = Object.assign({},command);
      let action = this.map[command.key];

      action.__handler = (ev)=>{
        if(this.pressed[ev.key] && action.key == ev.key){
          action.__active = true;
          this.map[ev.key].handler(ev);
          setTimeout(()=>
            action.__handler(ev),
            1000/SCENE.FPS
          );
        }else{
          action.__active = false;
        }
      }
    });

    window.addEventListener('keydown', (ev)=>{
        this.pressed[ev.key] = true;
        Object.keys(this.pressed).forEach(key=>{
          let action = this.map[key];
          if(action && !action.__active) action.__handler(ev);
        });
    });

    window.addEventListener('keyup', (ev)=>{
        this.pressed[ev.key] = false;
    });
  }



}
