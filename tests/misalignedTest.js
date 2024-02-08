const { expect } = require("chai");
const { print_color_map } = require("./misaligned.js");
function colorMapTest() {
  const { colorMap, majorColors, minorColors } = print_color_map();
  console.log(colorMap);
  const colorMapLines = colorMap.split("\n").filter(Boolean);
  const majorColorArray = [...majorColors];
  const minorColorArray = [...minorColors];
  const maxSizeOfColorPair = majorColorArray.length * minorColorArray.length;
  expect(colorMapLines.length).equals(25); //fails
  expect(colorMapLines.length).equals(maxSizeOfColorPair); //fails
  colorMapLines.forEach((pair, zeroBasedPairNumber) => {
    const parts = pair.split("|");
    const pairNumber = zeroBasedPairNumber + 1;
    const majorColor = parts[1].trim().split(",")[0];
    const minorColor = parts[2].trim().split(",")[0];
    console.assert(
      pair.includes(`${pairNumber}`),
      `Pair ${pairNumber} not found`
    ); //fails
    console.assert(
      majorColor.includes(majorColor),
      `Major color ${majorColor} not found`
    );
    console.assert(
      minorColor.includes(minorColor),
      `Minor color ${minorColor} not found`
    );
  });
  console.log("All is well (maybe!)");
}
colorMapTest();
