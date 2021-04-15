class Rope {
    constructor(bodyA, bodyB,offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10,
            pointB: {x: this.offsetX, y:this.offsetY}
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        console.log(options)
    }

    display(){
        push();
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
    
        strokeWeight(4);
        
        var anchor1x=pointA.x;
        var anchor1y=pointA.y;

        var anchor2x=pointB.x;
        var anchor2y=pointB.y;

        line(anchor1x, anchor1y, anchor2x, anchor2y);
        pop();
    }

}