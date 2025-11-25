const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'downloaded_images');
const destDir = path.join(__dirname, '..', 'public', 'downloaded_images');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory not found: ${src}`);
    process.exit(1);
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`Copied ${srcFile} -> ${destFile}`);
    }
  });
}

copyDir(srcDir, destDir);
console.log('All images copied to public/downloaded_images');
