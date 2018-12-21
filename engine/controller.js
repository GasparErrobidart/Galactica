class Controller{

  constructor(map){
    this.map = {};
    this.pressed = {};

    map.forEach(command => {
      this.map[command.key] = Object.assign({},command);
      let action = this.map[command.key];

      console.log("command",command);

      action.__handler = (ev)=>{
        if(this.pressed[ev.key] && action.key == ev.key){
          this.map[ev.key].handler(ev);
          setTimeout(()=>
            action.__handler(ev),
            1000/SCENE.FPS
          );
        }
      }

      window.addEventListener('keydown',(ev)=>{
        action.__handler(ev)
      });
    });

    console.log("Controller map",this.map);

    window.addEventListener('keydown', (ev)=>{
        this.pressed[ev.key] = true;
    });

    window.addEventListener('keyup', (ev)=>{
        this.pressed[ev.key] = false;
    });
  }



}
