class Iron{
	constructor(x,y)
	{
	var options = {
		'restitution':0.8,
		'friction':3,
		'density':30
	}
    this.body = Bodies.rectangle(x, y, 70, 70, options);
    this.width = 70;
    this.height = 70;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    

    push();
    translate(pos.x, pos.y);
    
    strokeWeight(3);
    stroke('white')
    fill(10);
    rect(300, 0, this.width, this.height);
    pop();
  };
};