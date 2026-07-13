const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const targetDirs = [
  'src/app/services',
  'src/app/solutions',
  'src/app/company'
];

let allFiles = [];
targetDirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    allFiles = allFiles.concat(findFiles(fullPath, /page\.tsx$/));
  }
});

let modifiedCount = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Typography
  content = content.replace(/fontSize:\s*['"]4\.5rem['"]/g, "fontSize: 'var(--font-hero)'");
  content = content.replace(/fontSize:\s*['"](?:3\.5rem|3rem|2\.5rem)['"]/g, "fontSize: 'var(--font-h2)'");
  content = content.replace(/fontSize:\s*['"](?:2rem|1\.8rem)['"]/g, "fontSize: 'var(--font-h3)'");

  // Padding
  content = content.replace(/paddingTop:\s*['"]10rem['"]/g, "paddingTop: 'var(--spacing-section)'");
  content = content.replace(/paddingBottom:\s*['"]6rem['"]/g, "paddingBottom: 'var(--spacing-section)'");
  content = content.replace(/padding:\s*['"](?:5rem|6rem|8rem)\s+0['"]/g, "padding: 'var(--spacing-section) 0'");
  content = content.replace(/padding:\s*['"](?:10rem|12rem|14rem)\s+0['"]/g, "padding: 'calc(var(--spacing-section) * 1.5) 0'");

  // Gap
  content = content.replace(/gap:\s*['"](?:4rem|5rem|6rem)['"]/g, "gap: 'var(--spacing-section-sm)'");

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log(`Modified: ${file}`);
  }
}

console.log(`\nSuccessfully applied fluid variables to ${modifiedCount} files.`);
