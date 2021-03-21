class Slingshot{
constructor(bodyA,pointB) {
   console.log(bodyA); 
    var options = {
        bodyA:bodyA,
        pointB: pointB,
        stiffness:0.1,
        length:10
    }
this.chain = Matter.Constraint.create(options);
this.pointB = pointB
this.slingone =loadImage('sprites/sling1.png')
this.slingtwo = loadImage('sprites/sling2.png')
this.slingthree = loadImage('sprites/sling3.png')
World.add(world,this.chain);

console.log(this.chain.bodyA);

}

fly(){
 this.chain.bodyA = null; 
 //detaching bird from the constraint  
}
display() {
image (this.slingone,250,230); 
image (this.slingtwo,220,228);  
    
if (this.chain.bodyA){
    var posA = this.chain.bodyA.position;
    var posB = this.pointB;
    push(); 
    strokeWeight (7); 
    stroke(48,23,8);
    if (posA.x<240){
        line(posA.x-20,posA.y,posB.x,posB.y)
        line(posA.x-20,posA.y,posB.x+40,posB.y+10)
        image(this.slingthree,posA.x-30,posA.y-20,15,30);

    } 
    else {
        line(posA.x+20,posA.y,posB.x,posB.y)
    line(posA.x+20,posA.y,posB.x+40,posB.y+10)
    image(this.slingthree,posA.x+22,posA.y-20,15,30);
    }


    pop();
} 



}
attach(body){
    this.chain.bodyA = body;
}
}




















