//DO NOT EDIT THIS OBJECT
//ONLY USE IT IN YOUR CODE TO TRANSLATE
//MORSE SYMBOLS TO REGULAR TEXT
const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
}

Object.freeze(MORSE_CODE)

function morse(text) {
  let newtext = text.trim(); 
  
  const morse = [];

  newtext = text.split('   ');

  for(let i = 0; i < newtext.length; i++){
    let char = newtext[i].split(' ');
    morse.push(char);
  }
  let chars = [];
  for(let i = 0; i < morse.length; i++){
    for(let j = 0; j < morse.length; j++){
      chars.push(MORSE_CODE[morse[i][j]]);
      if(j == morse[i].length - 1){
        chars.push(' ');
      }
    }
  }
  return chars.toString('').trim().replace(/,/g,' ');
}
console.log(morse('-.. . -.-. .- -.. . ...-'));

module.exports = morse
