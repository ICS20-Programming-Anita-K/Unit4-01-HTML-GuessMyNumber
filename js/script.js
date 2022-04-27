// Created by: Anita Kay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a message when the user guesses a number
 */
function displayMessage () {
  // declare constants
	const MIN = 1;
  const MAX = 6;
  
  // declare variable
  let correct = Math.floor((Math.random() * MAX) + MIN);
  
	// get user input
	let num = parseInt(document.getElementById('num').value)

  	// if the user guesses the right number, display "You are correct!"
	if (num == correct) {
		document.getElementById('message').innerHTML = "You are correct!"
	} 
	// otherwise, if the user guesses the wrong number, display "That is incorrect! The correct answer is  "	
	else if (num != correct) {
		document.getElementById('message').innerHTML = "You are incorrect! The correct answer is " + correct + "."
	}

  // display the message
}
