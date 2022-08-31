// 05v_arrayEvery
array = [4,5,6,7,8,9,10]

regraImpar = (item) => item%2 != 0

console.log("Filtrar por número ímpares? "+ array.filter(regraImpar))

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

console.log("Filtrar por número primos? "+ array.filter(regraPrimo))
