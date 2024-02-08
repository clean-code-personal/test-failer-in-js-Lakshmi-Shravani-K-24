const { expect } = require("chai");
const { print_color_map } = require("../misaligned.js");
function colorMapTest() {
  const { colorMap, majorColors, minorColors } = print_color_map();
  console.log(colorMap);
  const colorMapLines = colorMap.split("\n").filter(Boolean);
  const majorColorArray = [...majorColors];
  const minorColorArray = [...minorColors];
  const maxSizeOfColorPair = majorColorArray.length * minorColorArray.length;
  expect(colorMapLines.length).equals(maxSizeOfColorPair);

  let majorIndex = 0;
  let minorIndex = 0;

  colorMapLines.forEach((pair, zeroBasedPairNumber) => {
    const parts = pair.split("|");
    const pairNumber = zeroBasedPairNumber + 1;
    const majorColor = parts[1].trim().split(",")[0];
    const minorColor = parts[2].trim().split(",")[0];
    //Test seperators alignment
    expect(parts[0].trim()).to.equal("");
    expect(parts[1].trim()).to.equal("");
    // Test pair number presence
    console.assert(
      pair.includes(`${pairNumber}`),
      `Pair ${pairNumber} not found`
    );

    // Test major color
    console.assert(
      majorColor === majorColorArray[majorIndex],
      `Major color ${majorColor} not found or in wrong order`
    );
    majorIndex = parseInt(pairNumber / minorColorArray.length);

    // Test minor color
    console.assert(
      minorColor === minorColorArray[minorIndex],
      `Minor color ${minorColor} not found or in wrong order`
    );
    minorIndex = (minorIndex + 1) % minorColorArray.length;
  });

  console.log("All is well!");
}
colorMapTest();
