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
  * fulfills SetupProcess intent
  */
function fulfillSetup(processType) {
  console.log(`Fulfilling ${constants.SETUP_PROCESS_INTENT} intent`);
  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    constants.SETUP_BOT_RESPONSE.replace('{0}', "").replace('{1}', processType)
  );
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, redirectedFromDialogs = false, callback) {
  console.log(`In ${constants.FULFILL_CODE_HOOK} FOR ${constants.SETUP_PROCESS_INTENT}`);

  // this call to handleFulfillmentCodeHook did not come from the handler for dialog code hook
  if(!redirectedFromDialogs) {
    var processType = intentRequest.currentIntent.slots.processType;
    console.log(`${constants.PROCESS_TYPE_VAL} ${processType}`);

    var fulfillmentResult = fulfillSetup(processType);

    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      fulfillmentResult.fulfillmentState,
      fulfillmentResult.message
      ));
  }

  // this call to handleFulfillmentCodeHook came from the handler for dialog code hook,
  // meaning the user did not specify a slot type
  else {
    console.log(`In ${constants.FULFILL_CODE_HOOK} from ${constants.DIALOG_CODE_HOOK}`);

    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      constants.FULFILLED_STATUS,
      constants.SETUP_BOT_RESPONSE.replace('{0}', constants.PROCESSES_LIKE).replace('{1}', `${constants.AUTO_PAY_SLOT} or ${constants.PAPERLESS_SLOT}`)
    ))

  }

}
