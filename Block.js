class Block{
    constructor(x,y,w,h){
        var option = {
            restitution:0.08,
            density:1
        }
        this.body = Bodies.rectangle(x,y,w,h,option)
        this.width = w
        this.height = h
        this.visibility = 255
        World.add(world,this.body)
    }  
    display(){
        if(this.body.speed<5){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        strokeWeight(2)
        stroke("cyan")
        fill("green")
        rect(0,0,this.width,this.height)
        pop()
        }
        else{
            World.remove(world,this.body)
            this.visibility = this.visibility - 5
        }
    }
    score(){
        if(this.visibility<0 && this.visibility >- 105){
    
            
          score = score+1
        }
        
      }
    
    
}