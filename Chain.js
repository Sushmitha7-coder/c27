class Chain{
    constructor(bodyA,bodyB){
        var opt={
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(opt)
        World.add(world,this.chain)
    }
display(){
     var ptA= this.chain.bodyA.position
     var ptB= this.chain.bodyB.position
    line(ptA.x,ptA.y,ptB.x,ptB.y)
}
}