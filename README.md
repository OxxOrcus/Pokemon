# Pokémon Starter Choice Program

This project is a simple JavaScript program that allows a trainer to select a starter Pokémon and displays a welcoming message based on the chosen Pokémon. The code is designed to work on the DIO platform, which provides global `gets()` and `print()` functions for input and output.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [How It Works](#how-it-works)
- [Requirements](#requirements)
- [Usage](#usage)
- [Code](#code)
- [Example](#example)
- [License](#license)

## Description

In the Pokémon world, each trainer begins their journey by choosing one of several starter Pokémon. This program prompts the user to choose a starter Pokémon from a specific list. Once a selection is made, the program outputs a message confirming the chosen Pokémon.

## Features

- Accepts user input for Pokémon selection.
- Displays a custom message for the chosen Pokémon.
- Handles invalid inputs by displaying an error message.

## How It Works

The program uses conditional statements to evaluate the trainer's input. Based on the input number, it assigns a corresponding Pokémon to the `chosenPokemon` variable and outputs a welcome message. If the input does not match any valid Pokémon choices, the program informs the user that their selection is invalid.

## Requirements

- **JavaScript Environment**: The code is compatible with DIO’s JavaScript challenge environment, which supports the global `gets()` and `print()` functions.

## Usage

1. Input a number to choose your Pokémon:
   - `1` for Bulbasaur
   - `2` for Charmander
   - `4` for Pikachu
   - `5` for Mewtwo
2. The program will output a message confirming your choice.

## Code

```javascript
// Data input. Remember: parseInt(()) is important to convert input values (String) to a numeric value (int).
let trainerChoice = parseInt(gets());
let chosenPokemon; 

// TODO: Implement the necessary conditions to solve the challenge. Use the example table to identify the trainer's choice:
if (trainerChoice === 1) {
    chosenPokemon = "Bulbasaur";
} else if (trainerChoice === 2) {
    chosenPokemon = "Charmander";
} else if (trainerChoice === 4) {
    chosenPokemon = "Pikachu";
} else if (trainerChoice === 5) {
    chosenPokemon = "Mewtwo";
} else {
    chosenPokemon = null; // For an invalid choice
}

// Print the chosen Pokemon
if (chosenPokemon) {
    print("You chose " + chosenPokemon + " as your starter Pokemon.");
} else {
    print("Invalid choice. Please select a valid number.");
}
