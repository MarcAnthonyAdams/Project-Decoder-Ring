
const substitutionModule = (function () {
  
  const engAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function findObjByIdx(arr, idx) {
    const results = arr.find((obj) => obj.index === idx);
    return results;
  };

  function findObjByLet(arr, letChar) {
    const results = arr.find((obj) => obj.letter === letChar);
    return results;
  };

  function checkSpaceAddSpace(str) {
    return str.includes(' ') ? str : `${str} `;
  };


  function substitution(input, alphabet, encode = true) {
  
    if (alphabet === undefined || alphabet.length !== 26) return false; 
     
    const updatedEngAlphabet = `${engAlphabet} `;
    const updatedCodeAlphabet = checkSpaceAddSpace(alphabet);

    const engAlphabetArr = updatedEngAlphabet.split('');
    const codeAlphabetArr = updatedCodeAlphabet.split('');
    const inputArr = input.split('');

    const engIndexArr = Object.entries(engAlphabetArr).map(([index, letter]) => ({letter, index}));
    const codeIndexArr = Object.entries(codeAlphabetArr).map(([index, letter]) => ({letter, index})); 
    const inputIndexArr = Object.entries(inputArr).map(([index, letter]) => ({letter, index}));

    
    const uniqueLetCountArr = codeAlphabetArr.reduce((prev, cur) => { 
      prev[cur] = (prev[cur] || 0) + 1; 
      return prev; 
    }, []);
    const uniqueLetCheckArr = Object.entries(uniqueLetCountArr).map(([letter, count]) => ({letter, count}));
    for (let u = 0; u < uniqueLetCheckArr.length; u++) {
      if (uniqueLetCheckArr[u].count > 1) return false;
    };

    if (encode === false) {

      const letterMatchArr = [];
      for (let i = 0; i < inputIndexArr.length; i++) {
        letChar = inputIndexArr[i].letter;
        const letObj = findObjByLet(codeIndexArr, letChar);
        letterMatchArr.push(letObj);  
      }
      const indexMatchArr = [];
      for (let l = 0; l < letterMatchArr.length; l++) {
        idx = letterMatchArr[l].index;
        const idxObj = findObjByIdx(engIndexArr, idx);
        indexMatchArr.push(idxObj);
      }
    const resultArr = indexMatchArr.map((result) => result.letter);
    const results = resultArr.join('');
    return results;

    } else {

      const letterMatchArr = [];
      for (let i = 0; i < inputIndexArr.length; i++) {
        letChar = inputIndexArr[i].letter;
        const letObj = findObjByLet(engIndexArr, letChar);
        letterMatchArr.push(letObj);  
      }
      const indexMatchArr = [];
      for (let l = 0; l < letterMatchArr.length; l++) {
        idx = letterMatchArr[l].index;
        const idxObj = findObjByIdx(codeIndexArr, idx);
        indexMatchArr.push(idxObj);
      }
    const resultArr = indexMatchArr.map((result) => result.letter);
    const results = resultArr.join('');
    return results;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;