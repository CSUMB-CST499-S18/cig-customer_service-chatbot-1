'use strict';
const constants = require('../constant-vars');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param infoType
 *    either a valid, user-provided information type or a default information type if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
module.exports = function(infoType) {
  const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES
  var infoSuchAs = constants.INFORMATION_SUCH_AS;

  if(infoType != constants.DEFAULT_INFO_TYPE) {
    infoSuchAs = "";
  }

  switch(random_response_num) {
    case 1:
      return constants.CHANGE_INFO_BOT_RESPONSE.replace('{0}', infoSuchAs).replace('{1}', infoType);
    case 2:
      return constants.CHANGE_INFO_BOT_RESPONSE2.replace('{0}', infoSuchAs).replace('{1}', infoType);
    case 3:
      return constants.CHANGE_INFO_BOT_RESPONSE3.replace('{0}', infoSuchAs).replace('{1}', infoType);
    case 4:
      return constants.CHANGE_INFO_BOT_RESPONSE4.replace('{0}', infoSuchAs).replace('{1}', infoType);
    case 5:
      return constants.CHANGE_INFO_BOT_RESPONSE5.replace('{0}', infoSuchAs).replace('{1}', infoType);
    default:
      break;
  }
}
