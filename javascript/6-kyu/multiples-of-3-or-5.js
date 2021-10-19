// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let result;
  let accum3 = 0;
  let accum5 = 0;
  let accum = [];
  

  if (number > 0) {
    do {
        accum3 += 3; 
        accum.push(accum3);
    } while (accum3 < (number - 3))

    do {
        accum5 += 5; 
        accum.push(accum5);
        console.log(accum);
    } while (accum5 < (number - 5));

    const eliminoRepetidos = new Set(accum);
    console.log(eliminoRepetidos);

    let arrayASumar = [...eliminoRepetidos];
    console.log(arrayASumar);

    result = arrayASumar.reduce((valorAnterior, valorActual) => {
         return valorAnterior += valorActual;
    }, 0)
    
  } else {
    result = 0;
  }
  return result;
}

console.log(solution(10)); 
