'use strict';
const constants = require('../constant-vars');
const payload = require('../mock-payload.json');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param polSyn
 *    either a valid, user-provided polSyn or a default polSyn if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
module.exports = function(polSyn) {
  const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES
  
  var home = "";
  var auto = "";
  var insurance = "";
  
  // checking which policies are available based of the policy names
  // HOC = home
  // PAC = auto
  for (policy in payload.policies) {
    if (policy.indexOf(constants.HOME_INSURANCE_VALUE) > -1) {
      home = constants.HOME_VALUE;
    }
    if (policy.indexOf(constants.AUTO_INSURANCE_VALUE) > -1) {
      auto = constants.AUTOMOBILE_VALUE;
    }
  }
  
  // determining which insurance were outputted from prior check
  if (home && auto) {
    insurance = home + " and " + auto;
  }
  if (home && !auto) {
    insurance = home;
  }
  if (!home && auto) {
    insurance = auto;
  }
  if (!home && !auto) {
    insurance = "none";
  }


  switch (random_response_num) {
    case 1:
      return constants.GET_POLICY_INFO_RESPONSE;
    case 2:
      return constants.GET_POLICY_INFO_RESPONSE2.replace('{0}', insurance);
    case 3:
      return constants.GET_POLICY_INFO_RESPONSE3.replace('{0}', insurance);
    case 4:
      return constants.GET_POLICY_INFO_RESPONSE4.replace('{0}', insurance);
    case 5:
      return constants.GET_POLICY_INFO_RESPONSE5.replace('{0}', insurance);
    default:
      break;
  }
}
