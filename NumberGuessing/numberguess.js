// var age=100
// var x=8;
// if ( age>10)
// {
//     console.log('hello')
//     var x=10
// } 
// console.log(x)
// //1
// function summethod(a,b)
// {
//     sum=a+b 
//     console.log(sum)
// }
// summethod(6,8)
// //2

// const summethod2= function(a,b)
// {
//     console.log(a+b)
// }
// summethod2(23,4)

// const summethod3=(a,b)=>
//     {
//         console.log(a+b)
//         return a+b

//     }
// console.log(summethod3(5,45))


const hidden = Math.floor(Math.random() * 100);
console.log(hidden)

for(i=0;i<5;i++)
 {
 let user=parseInt(prompt("Guess the number"))
 if (user===hidden)
 {
console.log("Congratulations! You've guessed the number!")
break;

 }
 else if(user>hidden){
    console.log("The number is high")
    
 }
 else if(user<hidden){
    console.log("The number is low")
 }
 else{
    console.log("enter correct number")
 }
 }
 alert(`Game over! The correct number was ${hidden} `)
