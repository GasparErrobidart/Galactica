class OverlayGraphic extends Actor{

  constructor(options){
    super();
    this.DOM.className = `overlay-graphic ${(options.css || []).join(' ')}`;
    this.DOM.style.backgroundImage = `url("${options.src}")`;
    this.position.x = 0;
    this.position.y = 0;
  }

}
