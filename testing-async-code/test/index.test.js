// const assert = require("assert");

// describe("smoke test", function() {
//   it("check equality", function() {
//       assert.equal(true, true);
//   })  
// })

const expect = require('chai').expect;

describe('smoke test', function() {
    it('checks equality', function () {
        expect(true).to.be.true;
    })
})