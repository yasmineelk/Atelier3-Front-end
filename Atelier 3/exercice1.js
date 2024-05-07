function filtrage(liste){
    const nombreFiltre = liste.filter(number => number % 2 ==0) ;
    return nombreFiltre.sort((a,b)=>a-b);
}

const numbers =[1,7,10,8,9,2];
const filtered = filtrage(numbers);
console.log (filtered);