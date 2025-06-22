const fs = require('fs').promises;

async function readFileAsync() {
  try {
    console.log('Reading file using Async/Await...');
    const data = await fs.readFile('sample.txt', 'utf8');
    console.log('File content (Async/Await):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
