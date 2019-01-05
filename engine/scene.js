class Scene{

  constructor(data){
    const { FPS , layers } = data;
    this.FPS = FPS;
    this.elements = [];
    this.__loop;
    this.__elementUpdated = false;
    this.layers = layers;
    this.paused = true;

    Object.keys(this.layers).forEach((name)=>{
      this.layers[name].rect = new Rect(this.layers[name]);
    });

  }

  add(element , layer = 'main'){
    if(!element.__inScene){
      element.__inScene = true;
      element.__SceneID = this.elements.push(element) - 1;
      this.layers[layer].appendChild(element.DOM);
    }
  }

  render(){
    if(this.__elementUpdated) this.updateElements();
    this.elements.forEach(element =>{
      if(element && element.__inScene){
        if(element.update) element.update();
        if(element.render) element.render();
        if(element.animation) element.animation.draw();
      }
    })
  }

  removeElement(element){
    element.__inScene = false;
    element.DOM.parentNode.removeChild(element.DOM);
    this.elements[element.__SceneID] = null;
    this.__elementUpdated = true;
  }

  updateElements(){
    this.__elementUpdated = false;;
    this.elements = this.elements
      .filter(e => e )
      .map((e,i) => {
        e.__SceneID = i;
        return e;
      })
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
