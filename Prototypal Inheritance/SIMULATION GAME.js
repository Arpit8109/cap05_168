function vehicle(brand,model,speed,fueltype){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fueltype=fueltype;

    this.horn=function(){
        console.log("horn");
    }
}
vehicle.prototype.accelerate=function(){
    console.log("The vehicle is accelerated.")
}
vehicle.prototype.brake=function(){
    console.log("The vehicle is braking.")
}

vehicle.prototype.refule=function(){
    console.log("The vehicle is refuling.")
}
let vehicle1=new vehicle("maruti","dzire",120,"petrol");

function car(brand,model,speed,fueltype,numberofwheels){
    vehicle.call(this,brand,model,speed,fueltype)

        this.numberofwheels=numberofwheels
    
}

car.prototype.honk=function(){
    console.log("car horn is blown!")
}

Object.setPrototypeOf(car.prototype,vehicle.prototype)

let car1 = new car("maruti","dzire",120,"petrol",4)

console.log(car1)