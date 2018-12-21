class Scene{

  constructor(data){
    const { FPS } = data;
    this.FPS = FPS;
    this.elements = [];
    this.__loop;
    this.paused = true;
    this.rect = new Rect(document.getElementById('scene'));
  }

  add(element){
    if(!element.__inScene){
      element.__inScene = true;
      this.elements.push(element);
    }
  }

  render(){
    this.elements.forEach(element => element.render())
  }

  start(){
    this.__loop = setInterval(()=> this.render(),1000/this.FPS,0);
    this.paused = false;
  }

  stop(){
    clearInterval(this.__loop);
    this.paused = true;
  }

}
