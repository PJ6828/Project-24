class Stone{
	constructor(x,y)
	{
	var options = {
		'restitution':0.8,
		'friction':3,
		'density':30
	}
    this.body = Bodies.rectangle(x, y, 30, 30, options);
    this.width = 30;
    this.height = 30;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    

    push();
    translate(pos.x, pos.y);
    fill("grey");
    rect(400, 0, this.width, this.height);
    pop();
  };
};