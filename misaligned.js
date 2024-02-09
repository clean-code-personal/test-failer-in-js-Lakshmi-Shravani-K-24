function print_color_map() {
let colorMap = "";
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
//Heading
colorMap += `Pair Number | Major Color | Minor Color\n`;
colorMap += `---------------------------------------\n`;

// Iterate over major and minor colors to generate the color map
for (let i = 0; i < majorColors.length; i++) {
  for (let j = 0; j < minorColors.length; j++) {
    const index = i * 5 + j + 1;
    const majorColor = majorColors[i];
    const minorColor = minorColors[j];
    colorMap += `${' '.repeat(5)}${index.toString().padEnd(6)} | ${majorColor.padEnd(11)} | ${minorColor}\n`;
  }
}
 return { colorMap, majorColors, minorColors };
}
module.exports = { print_color_map };

