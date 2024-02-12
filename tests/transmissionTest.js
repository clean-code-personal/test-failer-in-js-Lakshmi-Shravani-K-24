const { expect } = require("chai");
const {
  transmitInCelsius,
  transmissionFailureCount,
} = require("../transmitter.js");
// Stub function for network transmission
function networkTransmitStubSuccess(celsius) {
  console.log(`Temperature  transmitted: ${celsius} Celsius`);
  return 200;
}
function networkTransmitStubFailure(celsius) {
  console.log(`Cannot transmit temperature : ${celsius} Celsius`);
  return 500;
}
function transmissonTest() {
  // Injecting the stub function when calling transmitInCelsius
  transmitInCelsius(400.5, networkTransmitStubSuccess);
  transmitInCelsius(303.6, networkTransmitStubSuccess);
  // transmitInCelsius(504.7, networkTransmitStubFailure);
  console.log(`Transmission failed ${transmissionFailureCount} times.`);
  expect(transmissionFailureCount).to.equal(0); //passes
  // expect(transmissionFailureCount).to.equal(1); //passes if we use failre stub once
}
transmissonTest();
