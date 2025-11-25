const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'scraped_properties.json');

if (!fs.existsSync(filePath)) {
  console.error('scraped_properties.json not found');
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');
const updated = content.replace(/"\.\/downloaded_images\//g, '"/downloaded_images/');
fs.writeFileSync(filePath, updated, 'utf8');
console.log('Updated scraped_properties.json image paths');
