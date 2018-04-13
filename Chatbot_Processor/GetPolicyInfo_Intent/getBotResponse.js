'use strict';
const constants = require('../constant-vars');
const payload = require('../mock-payload.json');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param polSyn
 *    either a valid, user-provided information type or a default information type if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
module.exports = function(polSyn) {
  const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES
  
  var home = payload.policies[0].accountNumber;
  var auto = payload.policies[1].accountNumber;

  switch(random_response_num) {
    case 1:
      return constants.GET_POLICY_INFO_RESPONSE;
    case 2:
      return constants.GET_POLICY_INFO_RESPONSE2.replace('{0}', infoSuchAs).replace('{1}', polSyn);
    case 3:
      return constants.GET_POLICY_INFO_RESPONSE3.replace('{0}', infoSuchAs).replace('{1}', polSyn);
    case 4:
      return constants.GET_POLICY_INFO_RESPONSE4.replace('{0}', infoSuchAs).replace('{1}', polSyn);
    case 5:
      return constants.GET_POLICY_INFO_RESPONSE5.replace('{0}', infoSuchAs).replace('{1}', polSyn);
    default:
      break;
  }
}
