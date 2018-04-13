'use strict';
const constants = require('../constant-vars');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @return
 *    returns a randomly-selected response
 */
module.exports = function() {
  const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES


  switch(random_response_num) {
    case 1:
      return constants.GET_NOTICE_INFO_RESPONSE;
    case 2:
      return constants.GET_NOTICE_INFO_RESPONSE2;
    case 3:
      return constants.GET_NOTICE_INFO_RESPONSE3;
    case 4:
      return constants.GET_NOTICE_INFO_RESPONSE4;
    case 5:
      return constants.GET_NOTICE_INFO_RESPONSE5;
    default:
      break;
  }
}
