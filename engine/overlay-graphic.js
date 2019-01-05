class OverlayGraphic extends Graphic{

  constructor(options){
    super(options);
    this.DOM.className = this.DOM.className + " overlay";
  }

}
