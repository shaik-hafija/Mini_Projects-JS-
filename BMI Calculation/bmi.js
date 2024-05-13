// principle=5000
// rate=5
// time=3
// simppleinterest=principle*rate*time/100 
// compoundinterest=principle*(1+rate/100)**time
// console.log(`simple interest for ${principle} at rate of ${rate} in ${time} years is ${simppleinterest}`)
// console.log(`compound interest for ${principle} at rate of ${rate} in ${time} years is ${compoundinterest.toFixed(2)}`)

// age=0
// if(age == 0)
//     {
//         console.log('eligible')
//     }
// else{
//     console.log('not eligible')
// }

//BMI CALCULATION

//weight in kilograms divided by height in meters squared
// mass=parseFloat(prompt("enter your mass in kg"))
// height=parseFloat(prompt('enter your height in cm'))
// bmi=mass/(height/100)**2
// if (bmi<18.5)
// {
// alert('you are underweight')
// }else if( bmi<25)
// {
// alert('you have normal bmi')
// }else if(bmi<30)
// {
// alert('you are overweight')
// }else
// {
// alert('you are over obese')}


// function bmi()
// {
// //    weight in kilograms divided by height in meters squared
// mass=parseFloat(prompt("enter your mass in kg"))
// height=parseFloat(prompt('enter your height in cm'))
// bmi=mass/(height/100)**2
// if (bmi<18.5)
// {
// alert('you are underweight')
// }else if( bmi<25)
// {
// alert('you have normal bmi')
// }else if(bmi<30)
// {
// alert('you are overweight')
// }else
// {
// alert('you are over obese')} 
// }






let i = 'yes';
do {
    mass=parseFloat(prompt("enter your mass in kg"))
    height=parseFloat(prompt('enter your height in cm'))
    bmi=mass/(height/100)**2
    if (bmi<18.5)
    {
    alert('you are underweight')
                i=alert('do want to continue then type yes otherwise type no')

    }else if( bmi<25)
    {
    alert('you have normal bmi')
                i=alert('do want to continue then type yes otherwise type no')

    }else if(bmi<30)
    {
    alert('you are overweight')
                i=alert('do want to continue then type yes otherwise type no')

    }else
    {
    alert('you are over obese')
        i=alert('do want to continue then type yes otherwise type no')
} 
    
}
while (i=='yes');