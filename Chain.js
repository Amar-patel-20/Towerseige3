class Chain{
    constructor(BodyA,pointB){
        var option = {
            bodyA:BodyA,
            pointB:pointB,
            stiffness:0.1,
            length:10
        }
        this.pointB = pointB
        this.chain = Constraint.create(option)
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body
    }
    display(){
        
        if(this.chain.bodyA){
            push()
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            strokeWeight(3)
            stroke("red")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop()
        }
        
    }
    
}