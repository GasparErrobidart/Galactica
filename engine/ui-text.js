class TextUI extends Actor{

  constructor(options){
    super();
    const { text, name } = options;
    this.classes = ["ui","ui-text" , name || "" ];
    this.updateClasses();
    this.setText(text || "UI Text");
    this._display = true;
  }

  setText(text){
    this.DOM.innerHTML = text;
  }

  updateClasses(){
    this.DOM.className = this.classes.join(" ");
  }

  show(){
    if(!this._display){
      this._display = true;
      this.DOM.style.display = "block";
    }
  }

  hide(){
    if(this._display){
      this._display = false;
      this.DOM.style.display = "none";
    }
  }

}
