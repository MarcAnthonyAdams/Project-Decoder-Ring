
const caesarModule = (function () {
 
  const coderArr = [ 
    
    {character: ' ', column: '0', row: '0', index: 0}, 

    {character: 'A', column: '1', row: '1', index: 1}, {character: 'B', column: '2', row: '1', index: 2}, 
    {character: 'C', column: '3', row: '1', index: 3}, {character: 'D', column: '4', row: '1', index: 4}, 
    {character: 'E', column: '5', row: '1', index: 5}, {character: 'F', column: '1', row: '2', index: 6}, 
    {character: 'G', column: '2', row: '2', index: 7}, {character: 'H', column: '3', row: '2', index: 8}, 
    {character: 'I', column: '4', row: '2', index: 9}, {character: 'J', column: '4', row: '2', index: 10}, 
    {character: 'K', column: '5', row: '2', index: 11}, {character: 'L', column: '1', row: '3', index: 12}, 
    {character: 'M', column: '2', row: '3', index: 13}, {character: 'N', column: '3', row: '3', index: 14}, 
    {character: 'O', column: '4', row: '3', index: 15}, {character: 'P', column: '5', row: '3', index: 16}, 
    {character: 'Q', column: '1', row: '4', index: 17}, {character: 'R', column: '2', row: '4', index: 18}, 
    {character: 'S', column: '3', row: '4', index: 19}, {character: 'T', column: '4', row: '4', index: 20}, 
    {character: 'U', column: '5', row: '4', index: 21}, {character: 'V', column: '1', row: '5', index: 22}, 
    {character: 'W', column: '2', row: '5', index: 23}, {character: 'X', column: '3', row: '5', index: 24}, 
    {character: 'Y', column: '4', row: '5', index: 25}, {character: 'Z', column: '5', row: '5', index: 26}, 
    
    {character: '1', column: null, row: null, index: 27}, {character: '2', column: null, row: null, index: 28}, 
    {character: '3', column: null, row: null, index: 29}, {character: '4', column: null, row: null, index: 30}, 
    {character: '5', column: null, row: null, index: 31}, {character: '6', column: null, row: null, index: 32}, 
    {character: '7', column: null, row: null, index: 33}, {character: '8', column: null, row: null, index: 34}, 
    {character: '9', column: null, row: null, index: 35}, {character: '0', column: null, row: null, index: 36}, 
    
    {character: '`', column: null, row: null, index: 37}, {character: '~', column: null, row: null, index: 38}, 
    {character: '!', column: null, row: null, index: 39}, {character: '@', column: null, row: null, index: 40}, 
    {character: '#', column: null, row: null, index: 41}, {character: '$', column: null, row: null, index: 42}, 
    {character: '%', column: null, row: null, index: 43}, {character: '^', column: null, row: null, index: 44}, 
    {character: '&', column: null, row: null, index: 45}, {character: '*', column: null, row: null, index: 46}, 
    {character: '(', column: null, row: null, index: 47}, {character: ')', column: null, row: null, index: 48}, 
    {character: '-', column: null, row: null, index: 49}, {character: '_', column: null, row: null, index: 50}, 
    {character: '=', column: null, row: null, index: 51}, {character: '+', column: null, row: null, index: 52}, 
    {character: '[', column: null, row: null, index: 53}, {character: ']', column: null, row: null, index: 54}, 
    {character: '{', column: null, row: null, index: 55}, {character: '}', column: null, row: null, index: 56}, 
    {character: `\\`, column: null, row: null, index: 57}, {character: '|', column: null, row: null, index: 58}, 
    {character: ';', column: null, row: null, index: 59}, {character: ':', column: null, row: null, index: 60}, 
    {character: '\'', column: null, row: null, index: 61}, {character: '"', column: null, row: null, index: 62}, 
    {character: ',', column: null, row: null, index: 63}, {character: '.', column: null, row: null, index: 64}, 
    {character: '<', column: null, row: null, index: 65}, {character: '>', column: null, row: null, index: 66},
    {character: '/', column: null, row: null, index: 67}, {character: '?', column: null, row: null, index: 68},
    ];



 
  function arrLength(arr) {
    return arr.length;
  }

  function findObjByLet(arr, letChar) {
    const results = arr.find((obj) => obj.character === letChar);
    return results;
  };

  function findObjByIndex(arr, index) {
    const results = arr.find((obj) => obj.index === index);
    return results;
  };


  
  function caesar(input, shift, encode = true) {
    
    if (shift === 0 || shift > 25 || shift < -25) return false;
    
    const upperCaseInputStr = input.toUpperCase();
    const inputArr = upperCaseInputStr.split('');
    
    let num = 0;
    encode === false ? num = -(shift) : num = shift;
    
    inputCoderArr = [];
    for (let i = 0; i < inputArr.length; i++) {
      letChar = inputArr[i];
      const inputCoderObj = findObjByLet(coderArr, letChar);
      inputCoderArr.push(inputCoderObj);
    };
    
    
    const codedIndexArr = [];
    for (let i = 0; i < inputCoderArr.length; i++) { 
      coderIndex = inputCoderArr[i].index;
      if (coderIndex >= 27 || coderIndex < 1) {
        codedIndexArr.push(coderIndex);
      } else {
        firstShiftCodeIndex = coderIndex + num;
        secondShiftCodeIndex = firstShiftCodeIndex - 26;
        thirdShiftCodeIndex = 26 + firstShiftCodeIndex;
        if (firstShiftCodeIndex >= 27) {
          codedIndexArr.push(secondShiftCodeIndex);
        } else if (firstShiftCodeIndex < 1) {
          codedIndexArr.push(thirdShiftCodeIndex);
        } else {
          codedIndexArr.push(firstShiftCodeIndex); 
        }
      }
    };
    
    const resultArr = [];
    for (let i = 0; i < codedIndexArr.length; i++) {
      codeIndex = codedIndexArr[i];
      const codedObj = findObjByIndex(coderArr, codeIndex);
      resultArr.push(codedObj.character);
    };

    const resultStr = resultArr.join(''); 
    const updatedResultStr = resultStr.toLowerCase();
    const results = updatedResultStr;
    return results;   
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
