// Script to convert JSON to mockData.js with fixed image paths
const fs = require('fs');
const path = require('path');

try {
    // Read the scraped data
    const scrapedData = JSON.parse(fs.readFileSync(path.join(__dirname, 'src', 'data', 'scraped_properties.json'), 'utf8'));

    // Extract the data array and fix image paths
    const properties = scrapedData.data.map(prop => {
        return {
            ...prop,
            images: prop.images.map(img => img.replace(/^\.\/?downloaded_images\//, '/downloaded_images/'))
        };
    });

    // Create the export statement
    const content = `export const PROPERTIES = ${JSON.stringify(properties, null, 2)};\n`;

    // Write to mockData.js
    fs.writeFileSync(path.join(__dirname, 'src', 'data', 'mockData.js'), content, 'utf8');

    console.log(`✅ Successfully created mockData.js with ${properties.length} properties`);
    console.log('✅ Fixed all image paths to use /downloaded_images/');
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}
