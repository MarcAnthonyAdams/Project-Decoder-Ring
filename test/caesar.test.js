// Write your tests here!

const caesar = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar", () => {


   // Error Handling.
   
    it("should return false if the shift amount is 0", () => {
          const actual = caesar('message', 0);
          expect(actual).to.be.false;
    });
    it("should return false if the shift amount is above 25", () => {
          const actual = caesar('message', 99);
          expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
          const actual = caesar('message', -99);
          expect(actual).to.be.false;
    });


    // Encoding a message.
    it("should encode a message by shifting the letters", () => {
          const expected = 'tlzzhnl';
          const actual = caesar('message', 7);
          expect(actual).to.eql(expected);
    });
    it("should leaves spaces and other symbols as is", () => {
          const expected = 'tf tlzzhnl!';
          const actual = caesar('My message!', 7);
          expect(actual).to.eql(expected);
    });  
    it("should ignore capital letters", () => {
          const expected = 'tf tlzzhnl!';
          const actual = caesar('My message!', 7);
          expect(actual).to.eql(expected);  
    }); 
    it("should appropriately handle letters at the end of the alphabet", () => {
        const expected = 'kpggf';
        const actual = caesar('dizzy', 7);
        expect(actual).to.eql(expected);
  });
  it("should allow for a negative shift that will shift to the left", () => {
        const expected = 'fxlltzx';
        const actual = caesar('message', -7);
        expect(actual).to.eql(expected);
  });  
  

    // Decoding a message.
    it("should decode a message by shifting the letters in the opposite direction", () => {
          const expected = 'message';
          const actual = caesar('tlzzhnl', 7, false);
          expect(actual).to.eql(expected);
    });
    it("should leaves spaces and other symbols as is", () => {
          const expected = 'my message!';
          const actual = caesar('Tf tlzzhnl!', 7, false);
          expect(actual).to.eql(expected);
    });  
    it("should ignore capital letters", () => {
          const expected = 'my message!';
          const actual = caesar('Tf tlzzhnl!', 7, false);
          expect(actual).to.eql(expected);  
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const expected = 'dizzy';
        const actual = caesar('kpggf', 7, false);
        expect(actual).to.eql(expected);
    });  
    it("should allow for a negative shift that will shift to the left", () => {
        const expected = 'message';
        const actual = caesar('fxlltzx', -7, false);
        expect(actual).to.eql(expected);  
    });
}); 