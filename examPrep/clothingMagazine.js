"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Magazine_1 = require("./Magazine");
var Cloth_1 = require("./Cloth");
function main() {
    // Initialize the repository (Magazine)
    var magazine = new Magazine_1.Magazine("Zara", 20);
    // Initialize entity (Cloth)
    var cloth1 = new Cloth_1.Cloth("red", 36, "dress");
    // Print Cloth
    console.log(cloth1.toString()); // Output: Product: dress with size 36, color red
    // Add Cloth
    magazine.addCloth(cloth1);
    // Remove Cloth
    console.log(magazine.removeCloth("black")); // Output: false
    var cloth2 = new Cloth_1.Cloth("brown", 34, "t-shirt");
    var cloth3 = new Cloth_1.Cloth("blue", 32, "jeans");
    // Add Cloth
    magazine.addCloth(cloth2);
    magazine.addCloth(cloth3);
    // Get smallest cloth
    var smallestCloth = magazine.getSmallestCloth();
    console.log(smallestCloth === null || smallestCloth === void 0 ? void 0 : smallestCloth.toString()); // Output: Product: jeans with size 32, color blue
    // Get Cloth
    var getCloth = magazine.getCloth("brown");
    console.log(getCloth === null || getCloth === void 0 ? void 0 : getCloth.toString()); // Output: Product: t-shirt with size 34, color brown
    console.log(magazine.report()); // Output: Zara magazine contains: Product: jeans with size 32, color blue Product: t-shirt with size 34, color brown Product: dress with size 36, color red
}
main();
