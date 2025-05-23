// class constuctor

class car {
    constructor(barnd,price,color,speed){
        this.barnd=barnd;
        this.price=price;
        this.color=color;
        this.speed=speed;

    }
    output(){console.log(`I Like ${this.barnd} Car\nThe Maximum Amount Of The Car Is Around ${this.price} \nIt Fully Colored By ${this.color} Color\nDrive The Average Speed ${this.speed}`)}
}
const final = new car("BMW","75Lakhs","white","220kmph");
final.output();