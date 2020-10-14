class Plinko{
    constructor(x,y,radius){
        var options={
          isStaatic:true
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
       
        fill("white");
        ellipseMode(RADIUS);
        ellips(pos.x,pos.y,this.radius,this.radius);

    }
}