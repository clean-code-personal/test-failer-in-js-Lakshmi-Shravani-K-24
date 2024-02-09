const { expect } = require("chai");
const { transmitInCelsius, transmissionFailureCount } = require("../transmitter.js");

// Stub function for network transmission
function networkTransmitStub(celsius) {
  console.log(`Temperature to transmit: ${celsius} Celsius`);
  const randomNumber = Math.random();
  return randomNumber < 0.6 ? 200 : 500;
}
function transmissonTest() {
   // Injecting the stub function when calling transmitInCelsius
  transmitInCelsius(400.5, networkTransmitStub);
  transmitInCelsius(303.6, networkTransmitStub);
  transmitInCelsius(504.7, networkTransmitStub);
  expect(transmissionFailureCount).to.equal(0);//passes
  expect(transmissionFailureCount).to.equal(2);//fails
  expect(transmissionFailureCount).to.equal(5);// fails
  expect(transmissionFailureCount).to.equal(10);//fails
}
transmissonTest();

