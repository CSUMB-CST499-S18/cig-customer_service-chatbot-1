'use strict';
const constants = require('../constant-vars');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param payType
 *    either a valid, user-provided information type or a default information type if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
module.exports = function(payType) {
  const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES

  switch(random_response_num) {
    case 1:
      return constants.GET_COPY_RESPONSE;
    case 2:
      return constants.GET_COPY_RESPONSE2;
    case 3:
      return constants.GET_COPY_RESPONSE3;
    case 4:
      return constants.GET_COPY_RESPONSE4;
    case 5:
      return constants.GET_COPY_RESPONSE5;
    default:
      break;
  }
}
