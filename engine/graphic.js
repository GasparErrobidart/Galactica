class Graphic extends Actor{

  constructor(options){
    super();
    this.DOM.className = `graphic ${(options.css || []).join(' ')}`;
    this.DOM.style.backgroundImage = `url("${options.src}")`;
  }

}
