/**
  * Handles ChangeInformation intent's fulfillment
  * Author: Chanel Aquino
  * Date: 4/3/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}\n
  ${constants.CURRENT_DIR} ${__dirname}`);


/**
  * builds object for fulfilling ChangeInformation intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.CHANGE_INFO_INTENT} intent`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}



/**
  * fulfills ChangeInformation intent
  */
function fulfillChangeInfo(infoType) {
  console.log(`Fulfilling ${constants.CHANGE_INFO_INTENT} intent\n
    infoType: ${infoType}`);

  const bot_response = getBotResponse(infoType);
  console.log(`bot response: ${bot_response}`);

  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    bot_response
  );
}

/**
 * @param infoType
 *    type of information that user wants to change
 * @return
 *    if infoType is NULL (i.e., user did not provide one), return default info type
 *    else, return infoType
 */
function getValidInformationType(infoType) {
  if(!infoType) return constants.DEFAULT_INFO_TYPE;
  return infoType;
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {

  var infoType = getValidInformationType(intentRequest.currentIntent.slots.informationType);
  var fulfillmentResult = fulfillChangeInfo(infoType);

  callback (lexResponses.close(
    intentRequest.sessionAttributes,
    fulfillmentResult.fulfillmentState,
    fulfillmentResult.message
    )
  );
}
