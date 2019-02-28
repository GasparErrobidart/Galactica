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

  boundry(){
    let _bcr = this.DOM.getBoundingClientRect();
    return {
      left    : _bcr.left,
      top     : _bcr.top,
      bottom  : _bcr.bottom,
      right   : _bcr.right
    }
  }

  now(){
    return this.DOM.getBoundingClientRect();
  }

}
