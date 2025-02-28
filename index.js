// 1. Multiply: An equation whose multiplied result will equal 62
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2; // 31 * 2 = 62

// 2. Random: Generates a random integer greater than 0
let random = Math.floor(Math.random() * 100) + 1; // Ensures it's > 0

// 3. Mod: An equation that calculates a remainder equal to 4
let num3 = 10;
let num4 = 6;
let mod = num3 % num4; // 10 % 6 = 4

// 4. Max: Will return 20 as the highest number in the set
let max = Math.max(1, 5, 10, 15, 20); // Returns 20

// Export functions if required for testing
module.exports = { multiply, random, mod, max };
