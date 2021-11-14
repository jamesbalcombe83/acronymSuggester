const { expect } = require("chai");
const { acronymSuggester } = require("../acronymSuggester.js");


describe("acronymSuggester", function () {
    it("Should throw an error if given a number input", () => {
        const invalidInputAcronymSuggester = acronymSuggester.bind(null, 1);
        const validInputAcronymSuggester = acronymSuggester.bind(null, "OCC");
        expect(invalidInputAcronymSuggester).to.throw();
        expect(validInputAcronymSuggester).to.not.throw();
    });
    it("Should throw an error if input contains a space", () => {
        const invalidInputAcronymSuggester = acronymSuggester.bind(null, "np m");
        const validInputAcronymSuggester = acronymSuggester.bind(null, "jrb");
        expect(invalidInputAcronymSuggester).to.throw();
        expect(validInputAcronymSuggester).to.not.throw();
      });
      it("Should return a string with the number of words equal to the length of the acronym", () => {
        const input = "npm";
        const expectedNumOfWords = input.length;
        const result = acronymSuggester(input);
        expect(result.split(" ").length).to.equal(expectedNumOfWords);
      });
      it("Should return a string with the number of words equal to the length of the acronym", () => {
        const input = "USA";
        const expectedNumOfWords = input.length;
        const result = acronymSuggester(input);
        expect(result.split(" ").length).to.equal(expectedNumOfWords);
      });
});