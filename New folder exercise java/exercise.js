let student1Name = "Adekunle";
let student1Address = "";
let student1Phone = "";
let student2Name = "";
let student2Address = "";
let student2Phone = "";
let maxDigits = 9;
let isTheSkyBlue =true;

function astudent1(aName, aAddress,aPhone){
    let daysofTheWeek = 0;
    let superName = "Ola";
    console.log(aName);
    console.log(aAddress);
    console.log(aPhone);
    maxDigits = 11;
    isTheSkyBlue = false;
    daysofTheWeek = [
     "tuesday",
     "friday", 
     "saturday",
     "wednesday",
     "monday",
     "thursday",
     "sunday",

];
    for (
       let indexPosition = 0;
        indexPosition < daysofTheWeek.length;
        indexPosition++ ){
             if (indexPosition === 1 || indexPosition === 5 || indexPosition ===6) {
        console.log(" I do like " + daysofTheWeek[indexPosition]);
    } else{
        console.log(" I don't like "  + daysofTheWeek[indexPosition]); 
    }
    
}
}
astudent1("Tosin","3 glasgow road","000-111-222-453");
console.log(maxDigits);
console.log(isTheSkyBlue);