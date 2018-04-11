'use strict';
const constants = require('../constant-vars');
const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param processType
 *    either a valid, user-provided process type or a default process type if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
module.exports = function(processType) {
 const random_response_num = Math.floor(Math.random() * NUM_RESPONSES) + 1; // random number between 1 and NUM_RESPONSES
  var processesLike = constants.PROCESSES_LIKE;

  if(processType != constants.DEFAULT_PROCESS_TYPE) {
    processesLike = "";
  }

  switch(random_response_num) {
    case 1:
      return constants.SETUP_BOT_RESPONSE.replace('{0}', processesLike).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM);
    case 2:
      return constants.SETUP_BOT_RESPONSE2.replace('{0}', processesLike).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM)
    case 3:
      return constants.SETUP_BOT_RESPONSE3.replace('{0}', processesLike).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM)
    case 4:
      return constants.SETUP_BOT_RESPONSE4.replace('{0}', processesLike).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM)
    case 5:
      return constants.SETUP_BOT_RESPONSE5.replace('{0}', processesLike).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM)
    default:
      break;
  }
}
