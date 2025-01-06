//var vel = 90
//console.log(`The speed of your car is ${vel}KM/h`)

//if (vel > 60){ //simple condition
//    console.log('You exceed the speed limit. FINED!')
//}

//console.log('Always wear your seat belt!')

//var pais = 'Brasil'
//console.log(`Living in ${pais}`)

//if (pais === 'Brasil'){
//    console.log('You are Brazilian!')
//} else{
//    console.log('You are foreigner!')
//}

function tocheck(){
    var veltxt = document.querySelector('input#vel')
    var res = document.querySelector('div.res')
    var vel = Number(veltxt.value)

    console.log(vel)

    res.innerHTML = `your speed is <strong><i>${vel}KM/h<i></strong>`
    if (vel > 60){
        res.innerHTML += `<br><b>The speed limit is <span style='color:red;'>60KM/h!</span> You were FINED!<b>`
    }
    res.innerHTML += `<br><br>Always wear your seat belt!` 
}