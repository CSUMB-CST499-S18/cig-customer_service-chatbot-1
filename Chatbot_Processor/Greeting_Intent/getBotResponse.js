'use strict';
const constants = require('../constant-vars');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @return
 *   depending on the time of day, returns "Good morning!", "Good afternoon!", etc.
 */
function getTimeOfDayResponse() {
 const date = new Date();
 const hour = date.getHours();

 if(hour >= 0 && hour <= 5) { // midnight to 5am
  return "Hello!";
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
module.exports = function() {
 const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES
 const timeOfDay = getTimeOfDayResponse();

  switch(random_response_num) {
    case 1:
      return constants.GREET_BOT_RESPONSE.replace('{0}', timeOfDay);
    case 2:
      return constants.GREET_BOT_RESPONSE2.replace('{0}', timeOfDay);
    case 3:
      return constants.GREET_BOT_RESPONSE3.replace('{0}', timeOfDay);
    case 4:
      return constants.GREET_BOT_RESPONSE4.replace('{0}', timeOfDay);
    case 5:
      return constants.GREET_BOT_RESPONSE5.replace('{0}', timeOfDay);
    default:
      break;
  }
}
