let transmissionFailureCount = 0;
function networkTransmitStub(celsius) {
  console.log(`Temperature to transmit: ${celsius} Celsius`);
  const randomNumber = Math.random();
  return randomNumber < 0.6 ? 200 : 500;
}

function transmitInCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const returnCode = networkTransmitStub(celsius);
  if (returnCode != 200) {
    transmissionFailureCount++;
  }
}
transmitInCelsius(400.5);
transmitInCelsius(303.6);

console.log(`Transmission failed ${transmissionFailureCount} times.`);
module.exports = { transmissionFailureCount };
