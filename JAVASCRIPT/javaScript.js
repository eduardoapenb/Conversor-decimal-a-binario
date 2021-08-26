

function residuo(number){
   if (number % 2 === 0) {
       return true
    }else{
        return false
    }
}

function convertirArrayToNumber(Array){
    let number = ''
    for(let i = 0; i<Array.length; i++ ){
        number += Array[i]
    }
    return number = Number(number)

}



function convertirBinario(number){
    let binaryNumber = []
    
    
    if (number === 0){
         
        binaryNumber.push("0")
        
    }

 

    while(number !=0 ){
        if (residuo(number)){
            binaryNumber.push("0")
        }else{
            binaryNumber.push("1")
        }
        number = parseInt(number/2)
    }
    binaryNumber = binaryNumber.reverse()
    
     return convertirArrayToNumber(binaryNumber)

    
}

function getNumber(){
let number = Number(document.getElementById('binary').value ) 
let binaryNumber = convertirBinario(number)

document.getElementById('output').innerHTML = binaryNumber
document.getElementById('message').innerText = "El número en binario es:"
}