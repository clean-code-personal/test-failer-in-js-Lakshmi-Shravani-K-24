const { expect } = require("chai");
const { size } = require("../tshirts.js");
function sizeTest() {
  expect(size(38)).equals("M"); //fails
  expect(size(38)).to.not.equal("L"); //fails
  expect(size(42)).equals("M"); //fails
  expect(size(37)).equals("S");
  expect(size(40)).equals("M");
  expect(size(43)).equals("L");
  expect(size(36)).to.not.equal("M");
  expect(size(40)).to.not.equal("S");
  expect(size(42)).to.not.equal("S");
  console.log("All is well (maybe!)");
}
sizeTest();
