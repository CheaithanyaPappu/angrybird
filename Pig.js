class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibiliy=255;
  }

display(){


if (this.body.speed<3){
  super.display();

}
else {
  
this.Visibiliy = this.Visibiliy-5;
push();
  World.remove(world,this.body);
  
  tint(255,this.Visibiliy);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}
}
score() {
if (this.Visibiliy<0&&this.Visibiliy>-1005){
  score=score+5;
}





}
};