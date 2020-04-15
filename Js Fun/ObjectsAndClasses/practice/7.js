
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.fuel = fuel;
        this.parts = parts;

        let quality = parts.engine*parts.power;
        this.parts.quality=quality;

        // this.drive = function (fuelLoss) {
        //     return this.fuel -= fuelLoss;
        // }
    }
    drive = function (fuelLoss) {
        return this.fuel -= fuelLoss;
    }

}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);

//console.log(parts.engine);
//console.log(parts.power);
//parts.quality = parts.engine*parts.power;

parts.quality = parts.engine*parts.power;
vehicle.drive(100);
//console.log(vehicle.drive(100));
 

console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
