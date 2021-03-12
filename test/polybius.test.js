// Write your tests here!

const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {


    // Encoding a message.
    it("should encode a message by translating each letter to number pairs", () => {
          const expected = '23513434112251';
          const actual = polybius('message', true);
          expect(actual).to.eql(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
          const expected = '424222221351';
          const actual = polybius('jiggle', true);
          expect(actual).to.eql(expected);
    });
    it("should leave spaces as is", () => {
          const expected = '2345 23513434112251';
          const actual = polybius('My message', true);
          expect(actual).to.eql(expected);
    });


    // Decoding a message.
    it("should decode a message by translating each pair of numbers into a letter", () => {
          const expected = 'message';
          const actual = polybius('23513434112251', false);
          expect(actual).to.eql(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
          const expected = 'th(i/j)nkful';
          const actual = polybius('4432423352125413', false);
          expect(actual).to.eql(expected);
    });  
    it("should leave spaces as is", () => {
          const expected = 'my message';
          const actual = polybius('2345 23513434112251', false);
          expect(actual).to.eql(expected);  
    }); 
    it("should return false if the length of all numbers is odd", () => {
          const actual = polybius('44324233521254134', false);
          expect(actual).to.be.false;  
    }); 
    
}); 