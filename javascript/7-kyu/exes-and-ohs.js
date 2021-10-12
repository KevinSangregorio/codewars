// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function xo(str) {
    let countX = 0;
    let countO = 0;
    
    for (let letter = 0; letter < str.length; letter++) {
       if (str.charAt(letter) == 'o' || str.charAt(letter) == 'O') {
        countO++;
       } else if (str.charAt(letter) == 'x' || str.charAt(letter) == 'X') {
        countX++;
       } 
    }

    console.log(`La letra "o" se encuentra: ${countO} veces. \nLa letra "x" se encuentra: ${countX} veces.`);
    return countO == countX;
}


console.log(xo("xXXxYhshOoOos"));