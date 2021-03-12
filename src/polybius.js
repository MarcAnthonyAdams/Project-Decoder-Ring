
const polybiusModule = (function () {

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

    function strLength(str) {
      return str.length;
    }

    function findObjByNum(arr, num) {
      const results = arr.find((obj) => obj.number === num);
      return results;
    };

    function findObjByLet(arr, letChar) {
      const results = arr.find((obj) => obj.character === letChar);
      return results;
    };

    function findObjByIndex(arr, index) {
      const results = arr.find((obj) => obj.index === index);
      return results;
    };

    function dblZeroEqlSpace (input) {
      return input.replace('00', ' ');
    }

    function spaceEqlDblZero (input) {
      return input.replace(' ', '00');
    }

    function separateColumnsFromRows(arr) {
      results = [];
      for (let a = 0; a < arr.length; a++) {
        if (a % 2 == 0) { results.push(arr[a]) };
      }
      return results;
    }

    function separateRowsFromColumns(arr) {
      results = [];
      for (let a = 0; a < arr.length; a++) { 
        if (a % 2 != 0) { results.push(arr[a]) };  
      }
      return results;
    }
        
   
  function polybius(input, encode = true) {

    if (encode === false) {

      const updatedInputStr = spaceEqlDblZero(input);

      const strLength = updatedInputStr.length;
      if (strLength % 2 != 0) return false;

      const inputArr = updatedInputStr.split('');

      const inputColumnArr = separateColumnsFromRows(inputArr);
      const inputRowArr = separateRowsFromColumns(inputArr);

      const inputColumnKeyArr = Object.entries(inputColumnArr).map(([index, column]) => ({column, index}));
      const inputRowKeyArr = Object.entries(inputRowArr).map(([index, row]) => ({row, index}));

      inputLocationArr = [];
      for (let k = 0; k < inputColumnKeyArr.length; k++) { inputLocationArr.push(inputColumnKeyArr[k]);
        for (let r = 0; r < inputRowKeyArr.length; r++) { row = inputRowKeyArr[r];
          for (let l = 0; l < inputLocationArr.length; l++) { location = inputLocationArr[l];
            if (location.index === row.index) { Object.assign(location, {row: row.row}) };
          }
        }
      };
console.log(inputLocationArr)
      resultArr = [];
      for (let l = 0; l < inputLocationArr.length; l++) { location = inputLocationArr[l];
        for (let c = 0; c < coderArr.length; c++) { coderGrid = coderArr[c];
          if (location.column === coderGrid.column && location.row === coderGrid.row) { resultArr.push(coderGrid.character) };
        }
      };
      const resultStr = resultArr.join('');
      const strReplace = resultStr.replace(/IJ/gi, '(I/J)');
      const updatedResultStr = strReplace.toLowerCase();
      const results = updatedResultStr;
      return results;

    } else {

      const updatedInput = input.toUpperCase();
      const inputArr = updatedInput.split('');

      const inputcoderArr = [];
      for (let i = 0; i < inputArr.length; i++) {
        letChar = inputArr[i];
        const inputcoderObj = findObjByLet(coderArr, letChar);
        inputcoderArr.push(inputcoderObj);
      };
      const resultArr = inputcoderArr.map((numPair) => {return `${numPair.column}${numPair.row}`});
      const resultStr = resultArr.join('');
      const updatedResultStr = dblZeroEqlSpace(resultStr);
      const results = updatedResultStr;
      return results;
    };
  };

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;