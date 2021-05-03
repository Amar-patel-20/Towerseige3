class Ball{
    constructor(x,y,r){
        var option = {
            restitution:0.08,
            density:1
        }
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(x,y,r,option)
        this.radius = r
        World.add(world,this.body)
    }  
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        fill("grey")
        image(this.image,0,0,50,50)
        pop()
    }
    
}