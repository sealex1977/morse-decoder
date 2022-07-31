const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
        // write your solution here
        let arrMorse = [];
        let strMorse = '';

        for (let i = 0; i < expr.length; i += 10) {
        let str = '';

            for (j = 0; j < 10; j += 2) {
        if (expr[i + j] == '*') {
            str += ' ';
            break;
        } else if (expr[i + j] + expr[i + j + 1] == '10') {
            str += '.';
        } else if (expr[i + j] + expr[i + j + 1] == '11') {
            str += '-';
        }
            }
        arrMorse.push(str);
        }

        for (let key in arrMorse) {
        if (arrMorse[key] == ' ') {
        strMorse += ' ';
        } else {
        strMorse += MORSE_TABLE[arrMorse[key]];
        } 
    }

    return strMorse;
}

module.exports = {
    decode
}