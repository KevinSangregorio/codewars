// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    let strSinEspacios = str.replace(/ /g, "")
    const longitudString = strSinEspacios.length;

    if (longitudString % 2 == 0) {
        console.log("Tu string tiene una cantidad de caracteres par y no hace falta agregar guiones!");
    } else {
        strSinEspacios += "_"; 
    }
    console.log(strSinEspacios.match(/.{2}/g));
    return strSinEspacios.match(/.{2}/g);
}

solution("Ho!@, cóm0 est4s?");