const fs = require('fs');

const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const countWords = (text) => {
  // Removing any leading/trailing spaces and newlines, then splitting the text by whitespace to count the words.
  const words = text.trim().split(/\s+/);
  return words.length;
};

const filePath = 'data.txt';

(async () => {
  try {
    const fileContent = await readFileAsync(filePath);
    const wordCount = countWords(fileContent);
    console.log(`Total word count: ${wordCount}`);
  } catch (error) {
    console.error('Error reading file:', error);
  }
})();
