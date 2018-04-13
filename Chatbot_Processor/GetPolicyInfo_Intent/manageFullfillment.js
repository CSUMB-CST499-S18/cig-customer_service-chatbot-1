/**
  * Handles GetPolicyInfo intent's fulfillment
  * Author: Maria Loza
  * Date: 4/12/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}\n
  ${constants.CURRENT_DIR} ${__dirname}`);


/**
  * builds object for fulfilling GetPolicyInfo intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.GET_POLICY_INFO_INTENT} intent`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}



/**
  * fulfills GetPolicyInfo intent
  */
function fulfillPolicy(polSyn) {
  console.log(`Fulfilling ${constants.GET_POLICY_INFO_INTENT} intent\n
    polSyn: ${polSyn}`);

  const bot_response = getBotResponse(polSyn);
  console.log(`bot response: ${bot_response}`);

  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    bot_response
  );
}

/**
 * @param polSyn
 *    type of information that user wants to change
 * @return
 *    if polSyn is NULL (i.e., user did not provide one), return default info type
 *    else, return polSyn
 */
function getValidInformationType(polSyn) {
  if(!polSyn) return constants.DEFAULT_POL_SYN_TYPE;
  return polSyn;
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {

  var polSyn = getValidInformationType(intentRequest.currentIntent.slots.polSyn);
  var fulfillmentResult = fulfillPolicy(polSyn);

  callback (lexResponses.close(
    intentRequest.sessionAttributes,
    fulfillmentResult.fulfillmentState,
    fulfillmentResult.message
    )
  );
}
