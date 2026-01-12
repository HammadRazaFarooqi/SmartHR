const fs = require('fs');
const path = require('path');

// Copy assets from parent directory to public folder
const sourceDir = path.join(__dirname, '..', 'assets');
const destDir = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(sourceDir)) {
  console.error('❌ Assets directory not found at:', sourceDir);
  console.log('Please ensure the assets folder exists in the parent directory.');
  process.exit(1);
}

// Create public directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'public'))) {
  fs.mkdirSync(path.join(__dirname, 'public'), { recursive: true });
}

// Copy function
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log('📦 Copying assets...');
  copyRecursiveSync(sourceDir, destDir);
  console.log('✅ Assets copied successfully to public/assets');
} catch (error) {
  console.error('❌ Error copying assets:', error.message);
  process.exit(1);
}

