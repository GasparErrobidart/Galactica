class Rect{

  constructor(DOM){
    this.DOM = DOM;
  }

  width(){
    return this.DOM.getBoundingClientRect().width;
  }

  height(){
    return this.DOM.getBoundingClientRect().height;
  }

}
