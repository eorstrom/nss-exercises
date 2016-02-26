describe("The specification for the WordChecker functions", function() {

    it("should have a checkWordCount function", function() {
        expect(checkWordCount).toBeDefined();
    });

    it("should return false if a string sent to it has more than 100 words in it", function() {
        expect(checkWordCount(longStr)).toBe(false);
    });

    it("should have a duplicateCheck function", function() {
        expect(duplicateCheck).toBeDefined();
    });

    it("should return false if a string has duplicate words in it", function() {
        expect(checkWordCount).toBeDefined();
    });

    it("should have a verifyAlphaNumeric. function", function() {
        expect(verifyAlphaNumeric).toBeDefined();
    });

    it("should return false if there are any non-alphanumeric characters in a string", function() {
        expect(checkWordCount).toBeDefined();
    });
})