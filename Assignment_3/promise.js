const fs = require('fs').promises;

console.log('Reading file using Promises...');

fs.readFile('sample.txt', 'utf8')
  .then(data => {
    console.log('File content (Promise):', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
