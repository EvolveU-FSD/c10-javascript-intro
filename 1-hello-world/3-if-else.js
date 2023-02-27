const isArriving = false;

const subject = "world";

let greeting;

if (!isArriving) {
  greeting = "Hello";
} else {
  greeting = "Goodbye";
}

console.log(`${greeting} ${subject}!`);
