class Actor{

  constructor(){
    this.DOM = document.createElement('div');
    this.position = new Vector2(0,0);
    this.rect     = new Rect(this.DOM);
  }

  render(){
    this.DOM.style.top = this.position.y + 'px';
    this.DOM.style.left = this.position.x + 'px';
  }

}
