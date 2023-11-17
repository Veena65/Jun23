class Place{
    constructor(name,famous)
    {
        this.name=name;
        this.famous=famous;
    }
    placeinfo()
    {
        console.log("Place name : ",this.name,"that is famous for",this.famous);
    }
    
}
class City extends Place//inheritance
{
    constructor(name,famous,state)
    {
        super(name,famous);
        this.state=state;
    }
    placeinfo()//overridding a function that already exist in parent class
    {
        console.log("This place comes under City");
    }
    msg1()
    {
        console.log("I have a lot of interesting places");
        return this;//it returns object . must be given for method chaining
    }
    msg2()
    {
        console.log("Visit me");
    }
}
let c1=new City("Chennai","Tourism","Tamilnadu");
c1.placeinfo();
c1.msg1().msg2();//method chaining

import Vehicle,{start as go,off} from "./cls2.js";//as is used for alice naming

let veh1=new Vehicle();
go();
veh1.drive();
off();

import Car from "./cls2.js";//since given default Vehicle can be replaced by other name
let c11=new Car();
c11.drive();
