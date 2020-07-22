class Umbrella{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10 ,20, options);
        this.width = width;
        this.height = height;
        this.body.position.x=x;
        this.body.position.y=y;

       // this.image = loadImage("boy.jfif");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        push();
        /*
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        */
        rectMode(CENTER);
        rect( pos.x, pos.y, this.width, this.height);      
        pop();
      }
}