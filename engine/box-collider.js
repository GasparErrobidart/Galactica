class BoxCollider{

  constructor(actor){
    this.DOM = actor.DOM;
    this.rect = actor.rect;
    this.actor = actor;
    actor.collider = this;
  }

  update(elements){
    elements.forEach((actor)=>{
      if(this.isColliding(actor,this)){
        if(typeof this.actor.onCollision == 'function') this.actor.onCollision(actor);
      }
    });
  }

  isColliding(a,b){
    let aBoundry = a.rect.now();
    let bBoundry = b.rect.now();
    return  aBoundry.x < bBoundry.x + bBoundry.width &&
            aBoundry.x + aBoundry.width > bBoundry.x &&
            aBoundry.y < bBoundry.y + bBoundry.height &&
            aBoundry.height + aBoundry.y > bBoundry.y;
  }





}
