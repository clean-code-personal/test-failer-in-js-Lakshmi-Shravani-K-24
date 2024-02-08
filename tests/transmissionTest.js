const { expect } = require("chai");
const { transmissionFailureCount } = require("../transmitter.js");
function transmissonTest() {
  expect(transmissionFailureCount).to.equal(0);
  expect(transmissionFailureCount).to.equal(2);
  expect(transmissionFailureCount).to.equal(5);
  expect(transmissionFailureCount).to.equal(10);
}
transmissonTest();

