const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Choose your Pokemon (1 for Bulbasaur, 2 for Charmander, 4 for Pikachu, 5 for Mewtwo): ",
  (choice) => {
    choice = parseInt(choice);

    if (choice === 1) {
      console.log("You chose Bulbasaur as your starter Pokemon.");
    } else if (choice === 2) {
      console.log("You chose Charmander as your starter Pokemon.");
    } else if (choice === 4) {
      console.log("You chose Pikachu as your starter Pokemon.");
    } else if (choice === 5) {
      console.log("You chose Mewtwo as your starter Pokemon.");
    } else {
      console.log("Invalid choice. Please select a valid number.");
    }
    rl.close();
  }
);
