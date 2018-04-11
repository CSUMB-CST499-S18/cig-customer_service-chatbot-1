/**
  * Handles DifferentPayment intent's fulfillment
  * Author: Chanel Aquino
  * Date: 4/1/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
  * builds object for fulfilling DifferentPayment intent
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

  const bot_response = getBotResponse(processType);
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
