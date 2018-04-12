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
function fulfillChangeInfo() {
  console.log(`Fulfilling ${constants.CHANGE_INFO_INTENT} intent`);

  const bot_response = getBotResponse();
  console.log(`bot response: ${bot_response}`);

  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    bot_response
  );
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {

  var fulfillmentResult = fulfillChangeInfo();

  callback (lexResponses.close(
    intentRequest.sessionAttributes,
    fulfillmentResult.fulfillmentState,
    fulfillmentResult.message
    )
  );
}
