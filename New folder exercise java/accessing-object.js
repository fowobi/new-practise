let car={
    brand:"Honda",
    model:"Civic",
    colour:"White",
    year:"2020",
    "car name":"Honda Civic",

}
console.log("before");
console.log(car);
car.numberPlate="TT12 7TY";
car.brand="Benz";
delete car.colour;
console.log("after");
console.log(car);
