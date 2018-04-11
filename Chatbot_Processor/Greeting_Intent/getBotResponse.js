'use strict';
const constants = require('../constant-vars');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;
const CONVERT_TO_PST = 5; // need to substract 5 hours because Lex is currently in GMT time zone
//TODO: figure out time zone

/**
 * @return
 *   depending on the time of day, returns "Good morning!", "Good afternoon!", etc.
 */
function getTimeOfDayResponse() {
 const date = new Date();
 const hour = date.getHours() - CONVERT_TO_PST;

console.log(`date: ${date}\nhour: ${hour}`);

 if(hour >= 0 && hour <= 5) { // midnight to 5am
  const rand_num = Math.floor(Math.random() * 3) + 1; // 1 - 3
  switch(rand_num) {
   case 1:
    return constants.HELLO;
   case 2:
    return constants.HI_THERE;
   case 3:
    return constants.GREETINGS;
  }
 } else if(hour >= 6 && hour <= 11) { // 6am to 11am
  return constants.GOOD_MORNING;
 } else if(hour >= 12 && hour <= 17) { // 12pm to 5pm
  return constants.GOOD_AFTERNOON;
 } else { // 6pm to 11pm
  return constants.GOOD_EVENING;
 }
}

/**
 * @return
 *    returns a randomly-selected response
 */
module.exports = function(greeting) {
 const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES
 const timeOfDay = getTimeOfDayResponse();
 var botIntro = constants.BOT_INTRO;

 if(!greeting) { // user did not greet bot
  botIntro = "";
 }

  switch(random_response_num) {
    case 1:
      return constants.GREET_BOT_RESPONSE.replace('{0}', timeOfDay).replace('{1}', botIntro);
    case 2:
      return constants.GREET_BOT_RESPONSE2.replace('{0}', timeOfDay).replace('{1}', botIntro);
    case 3:
      return constants.GREET_BOT_RESPONSE3.replace('{0}', timeOfDay).replace('{1}', botIntro);
    case 4:
      return constants.GREET_BOT_RESPONSE4.replace('{0}', timeOfDay).replace('{1}', botIntro);
    case 5:
      return constants.GREET_BOT_RESPONSE5.replace('{0}', timeOfDay).replace('{1}', botIntro);
    default:
      break;
  }
}
