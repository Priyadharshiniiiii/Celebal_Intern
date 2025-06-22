const fs = require('fs');

console.log('Reading file using callback...');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content (Callback):', data);
});
