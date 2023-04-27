var winston = {
  age: 19,
  eyes: "black",
  likes: ["programming", "being programmed"],
  isCool: true,
  birthplace: {
      city: "Mountain View",
      state: "California"
  }
};

console.log("All about Winston:");
console.log("Winston is " + winston.age + " years old");
console.log("Winston has " + winston.eyes + " eyes");
console.log("Winston likes " + winston.likes[0] + " and " +  winston.likes[1]);
console.log("Winston was born in " + winston.birthplace.city + ", " + winston.birthplace.state);