const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
let lineCount = 0;

rl.on('line', (input) => {
  lines.push(input);
  lineCount++;
  if (lineCount === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const wordsArray = lines[0].split('');
  const searchString = Number(lines[1]);
  console.log(wordsArray[searchString === 0 ? 0 : searchString - 1]);

  process.exit(0);
});
