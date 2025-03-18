// Code your solutions in this file
// 1. Function to create thank-you messages
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // 2. Function to count down from a given number to zero
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Export functions for testing
  module.exports = {
    writeCards,
    countDown
  };
  