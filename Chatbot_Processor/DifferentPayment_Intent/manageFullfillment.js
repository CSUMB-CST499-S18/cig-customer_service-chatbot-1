/**
  * Handles SetupProcess intent's fulfillment
  * Author: Maria Loza
  * Date: 4/10/2018
  */

'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
const getBotResponse = require('./getBotResponse');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
  * builds object for fulfilling SetupProcess intent
  */
function buildFulfillmentResult(fulfillmentState, messageContent) {
  console.log(`Building fulfillment result for ${constants.SETUP_PROCESS_INTENT} intent`);

  return {
    fulfillmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  };
}

/**
  * fulfills DifferentPayment intent
  */
function fulfillSetup(payType) {
  console.log(`Fulfilling ${constants.DIFFERENT_PAYMENT_INTENT} intent\n
    payType: ${payType}`);
  
  const bot_response = getBotResponse(payType);
  console.log(`bot response: ${bot_response}`);
  
  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
   bot_response
  );
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, redirectedFromDialogs = false, callback) {

  // this call to handleFulfillmentCodeHook did not come from the handler for dialog code hook
  if(!redirectedFromDialogs) {
    console.log(`In ${constants.FULFILL_CODE_HOOK} FOR ${constants.DIFFERENT_PAYMENT_INTENT}`);
    
    var payType = intentRequest.currentIntent.slots.payType;
    var value = intentRequest.currentIntent.slots.value;
    console.log(`${constants.PAY_TYPE_VAL} ${payType}`);
    // console.log(`${constants.VALUE_VAL} ${value}`);

    var fulfillmentResult = fulfillSetup(payType);

    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      fulfillmentResult.fulfillmentState,
      fulfillmentResult.message
      )
    );
  }

  // this call to handleFulfillmentCodeHook came from the handler for dialog code hook,
  // meaning the user did not specify a slot type
  else {
    console.log(`In ${constants.FULFILL_CODE_HOOK} from ${constants.DIALOG_CODE_HOOK}`);
    
    var payType = `${constants.PAYMENT_VALUEOT}`;
    var message = constants.SETUP_BOT_RESPONSE.replace('{0}', payType)
    var fulfillmentResult = buildFulfillmentResult(constants.FULFILLED_STATUS, message);
    
    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      fulfillmentResult.fulfillmentState,
      fulfillmentResult.message
      )
    );

  }

}
