function print_color_map() {
  let colorMap = "";
  const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
  const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      colorMap += `${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`;
    }
  }
  return { colorMap, majorColors, minorColors };
}
module.exports = { print_color_map };
