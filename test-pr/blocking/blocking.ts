import fs from 'fs';

function processLogs() {
  const content = fs.readFileSync('huge-log.txt', 'utf-8'); // blocks event loop
  console.log(content);
}
