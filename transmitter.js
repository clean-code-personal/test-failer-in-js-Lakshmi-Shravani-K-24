let transmissionFailureCount = 0;
function transmitInCelsius(fahrenheit, transmittingFunction) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const returnCode = transmittingFunction(celsius);
  if (returnCode !== 200) {
    transmissionFailureCount+=1;
  }
}
module.exports = { transmitInCelsius, transmissionFailureCount };
