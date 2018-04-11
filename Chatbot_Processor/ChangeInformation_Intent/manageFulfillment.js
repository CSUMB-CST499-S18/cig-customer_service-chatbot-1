/**
  * Handles ChangeInformation intent's fulfillment
  * Author: Chanel Aquino
  * Date: 4/3/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');

console.log(`${constants.CURRENT_FILE} ${__filename}\n
  ${constants.CURRENT_DIR} ${__dirname}`);

const NUM_RESPONSES = constants.DEFAULT_NUM_BOT_RESPONSES;

/**
 * @param infoType
 *    either a valid, user-provided information type or a default information type if user did not provide one
 * @return
 *    returns a randomly-selected response
 */
function getChangeInfoResponse(infoType) {
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

  const bot_response = getChangeInfoResponse(infoType);
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
