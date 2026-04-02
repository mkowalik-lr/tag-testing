const fs = require("fs");
const path = require("path");

const libDir = path.join(__dirname, "lib");
const filePath = path.join(libDir, "index.js");
const filePath2 = path.join(libDir, "index2.js");
const filePath3 = path.join(libDir, "index2.js");
const today = new Date().toISOString();

if (!fs.existsSync(libDir)) {
  fs.mkdirSync(libDir);
}

fs.writeFileSync(filePath, today + "\n");
fs.writeFileSync(filePath2, today + "\n");
fs.writeFileSync(filePath3, today + "\n");
console.log(`Created ${filePath} with content: ${today}`);
console.log(`Created ${filePath2} with content: ${today}`);
console.log(`Created ${filePath3} with content: ${today}`);
