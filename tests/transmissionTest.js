const { expect } = require("chai");
const { transmissionFailureCount } = require("../transmitter.js");
function transmissonTest() {
  expect(transmissionFailureCount).to.equal(0);//passes
  expect(transmissionFailureCount).to.equal(2);//fails
  expect(transmissionFailureCount).to.equal(5);// fails
  expect(transmissionFailureCount).to.equal(10);//fails
}
transmissonTest();

