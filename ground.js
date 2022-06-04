//BluePrint - class
class Ground{

    //Properties
    constructor(x,y,w,h){

        var options={
            isStatic:true
        }


        this.width=w;
        this.height=h;

        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)

    }


    //Function - display/show/DrawObj
     show(){

        //Name Aliasing
        var pos=this.body.position

        Matter.Body.rotate(this.body,angle)
        angle=angle+0.07;

        rectMode(CENTER);

        push();

        translate(pos.x,pos.y);
        rotate(angle)

        fill("white");
        rect(0,0,this.width,this.height);

        pop();

     }



}
