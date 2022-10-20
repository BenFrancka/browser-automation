import { randomizer } from './randomModel';

const todoBot = setInterval(() => {
  let randomMethods = [];

  //populates array with all available methods from randomizer
  for (prop in randomizer) {
    if (typeof randomizer[prop] === 'function') {
      randomMethods.push(prop);
    }
  }

  //gets random method by index from the array
  let randomMethodIndex = Math.floor(Math.random() * randomMethods.length);

  //invokes random method based on above selection
  randomizer[randomMethods[randomMethodIndex]]();
}, 1000);

//!Run below code to stop the bot from running
//clearInterval(todoBot); 
