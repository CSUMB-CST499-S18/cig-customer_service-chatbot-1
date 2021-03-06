/**
  * Handles Greeting intent's fulfillment
  * Author: Chanel Aquino
  * Date: 4/10/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);


/**
  * builds object for fulfilling Greeting intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}

/**
 * fulfills Greeting intent
 */
function fulfillGreeting(greeting) {
 const bot_response = getBotResponse(greeting);
 return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    bot_response
  );
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, callback) {

  var greeting = intentRequest.currentIntent.slots.greetingType;

  var fulfillmentResult = fulfillGreeting(greeting);

  callback (lexResponses.close(
    intentRequest.sessionAttributes,
    fulfillmentResult.fulfillmentState,
    fulfillmentResult.message
    )
  );

}
