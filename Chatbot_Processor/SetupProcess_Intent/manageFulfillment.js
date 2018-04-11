/**
  * Handles SetupProcess intent's fulfillment
  * Author: Chanel Aquino
  * Date: 4/1/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param processType
 *    either a valid, user-provided process type or a default process type if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
function getSetupBotResponse(processType) {
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
/**
  * builds object for fulfilling SetupProcess intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.SETUP_PROCESS_INTENT} intent\n
  Fulfillment state: ${fulfillmentState}\n
    Message content: ${messageContent}`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}

/**
  * fulfills SetupProcess intent
  */
function fulfillSetup(processType) {
  console.log(`Fulfilling ${constants.SETUP_PROCESS_INTENT} intent\n
    processType: ${processType}`);

  const bot_response = getSetupBotResponse(processType);
  console.log(`bot response: ${bot_response}`);
  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    bot_response
  );
}

/**
 * @param processType
 *  type of process that user wants to set up
 * @return
 *  if processType is NULL (i.e., user did not provide one), return default process type
 *  else, return processType
 */
function getValidProcessType(processType) {

  if(!processType) return constants.DEFAULT_PROCESS_TYPE;
  return processType;
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {

  var processType = getValidProcessType(intentRequest.currentIntent.slots.processType);
  var fulfillmentResult = fulfillSetup(processType);

  callback (lexResponses.close(
    intentRequest.sessionAttributes,
    fulfillmentResult.fulfillmentState,
    fulfillmentResult.message
    )
  );

}
