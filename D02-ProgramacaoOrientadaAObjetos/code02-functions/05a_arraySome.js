// 05a_arraySome
array = [4,5,6,7,8,9,10]

regraImpar = (item) => item%2 != 0

console.log("Há algum número impar? "+ array.some(regraImpar))

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
      if((item%divisor)== 0)
        ndiv++
    
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Há algum número primo? "+ array.some(regraPrimo))
