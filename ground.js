class Ground
{
     constructor(x, y, w, h)
     {
          let options = {
               isStatic:true 
          };
     this.body = Bodies.rectangle(x, y, w, n, options); 
     this.w = w; 
     this.h = h; 
     World.add(world, this.body);
     }

}

Ground.display();