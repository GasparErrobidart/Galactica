class Scene{

  constructor(data){
    const { FPS , layers } = data;
    this.FPS = FPS;
    this.elements = [];
    this.__loop;
    this.__elementUpdated = false;
    this.layers = layers;
    this.paused = true;
    this._reactor = new Reactor();
    this._reactor.registerEvent('pause');
    this._reactor.registerEvent('play');
    this.on = this._reactor.addEventListener.bind(this._reactor);


    Object.keys(this.layers).forEach((name)=>{
      this.layers[name].rect = new Rect(this.layers[name]);
    });
    window.addEventListener("blur",this.stop.bind(this));
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
    this.elements.forEach((element) =>{
      if(element && element.__inScene){
        if(element.collider) element.collider.update( this.elements
          .filter((e) => e && e.collider && e.__SceneID != element.__SceneID )
        );
        if(element.update) element.update();
        if(element.render) element.render();
        if(element.animation) element.animation.draw();
      }
    })
  }

  isOutside(layerName,element){
    let layer = this.layers[layerName].rect.boundry();
    let actor = element.rect.boundry();
    let valid = (
      actor.bottom  <   layer.top     || // IT'S ABOVE
      actor.top     >   layer.bottom  || // IT'S BENEATH
      actor.right   <   layer.left    || // IT'S BEFORE
      actor.left    >   layer.right      // IT'S AFTER
    );
    return valid;
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
    this._reactor.dispatchEvent('play');
  }

  stop(){
    clearInterval(this.__loop);
    this.paused = true;
    this._reactor.dispatchEvent('pause');
  }

}
