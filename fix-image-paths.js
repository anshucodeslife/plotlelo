// Script to fix image paths in mockData.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'mockData.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Replace the paths - escape the dot properly
content = content.replace(/"\.\\/downloaded_images\//g, '"/downloaded_images/');

    // Write back
    fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Fixed image paths in mockData.js');
