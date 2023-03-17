function printName() {
    console.log(`Student's name is ${this.fullName}`);
}
const student = {
 fullName:"John Smith",
 age:10,
 printThis: function(){
    console.log(`Inside student object "this" points to:`);
    console.log(this);

 },
 printName:printName,
}
  student.printName();  
