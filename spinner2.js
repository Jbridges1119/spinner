let spinner = "|/-\\|/-|";
let time = 100;
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, time);
  time += 200;
} setTimeout(() => {
  process.stdout.write('\n');
}, time);






// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// },1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1600);
// setTimeout(() => {
//   process.stdout.write('\n');
// }, 1600);
