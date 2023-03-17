const car={
    brand:"Honda",
    model:"Civic",
    colour:"White",
    year:"2020",
    techSpec:{
        power:'140 bhp',
        fuelEconomy:'56.5 -60.1 mpg',
        capacity:['2.0 L','4.5 L','3.0 L'],
        roadTax:'£155'
    },
    printCarBrand: function(){
      console.log(`The car brand is ${car.brand}`);
    }
};  
 car.printCarBrand();