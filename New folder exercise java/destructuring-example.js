// const alphabet =['A','B','C','D','E','F']
// const numbers = ['1','2','3','4','5','6']
// const [a,b, ...rest]= alphabet
// const newArray =[...alphabet,  ...numbers]
// or this
// const newArray = alphabet.concat(numbers)
// console.log(a);
// console.log(b);
// console.log(rest);
// console.log(newArray);

//number destructuring example

// function sumAndMultiply(a,b){
//     return[a+b, a*b]
// }
// const [sum, multiply, divison ='No division'] = sumAndMultiply(2, 3)
// console.log(sum)
// console.log(multiply)
// console.log(divison)


//Object destructuring example
const personOne ={
    name:'kyle',
    age:24,
    favoriteFood:'Rice',
    address:{
        city:'somewhere',
        state:'One of them'
    }
}
// const personTwo ={
//     name:'Sally',
//     age:32,
//     favoriteFood:'Watermelon',
//     address:{
//         city:'Somewhere else',
//         state:'Another one of them'
//     }
// }
// const personThree = {...personOne, ...personTwo}
// console.log(personThree)

function printUser({ name, age, favoriteFood ='Watermelon'}){
    console.log(`Name is:${name},Age is ${age}, Food is ${favoriteFood}`)
}
printUser(personOne)