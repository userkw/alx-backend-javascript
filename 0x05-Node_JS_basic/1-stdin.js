process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const cv = process.stdin.read();
  if (cv !== null) {
    process.stdout.write(`Your name is: ${cv}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
