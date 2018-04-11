/**
  * Handles SetupProcess intent's fulfillment
  * Author: Maria Loza
  * Date: 4/10/2018
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
  console.log(`Fulfilling ${constants.SETUP_PROCESS_INTENT} intent\n
    processType: ${processType}`);
  
  if(processType === `${constants.AUTO_PAY_SLOT} or ${constants.PAPERLESS_SLOT}`) {
    return buildFulfillmentResult(
      constants.FULFILLED_STATUS,
      constants.SETUP_BOT_RESPONSE.replace('{0}', constants.PROCESSES_LIKE).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM)
    );
  }
  
  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    constants.SETUP_BOT_RESPONSE.replace('{0}', "").replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM)
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
    console.log(`${constants.VALUE_VAL} ${value}`);

    var fulfillmentResult = fulfillSetup(processType);

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
    
    var processType = `${constants.AUTO_PAY_SLOT} or ${constants.PAPERLESS_SLOT}`;
    var message = constants.SETUP_BOT_RESPONSE.replace('{0}', constants.PROCESSES_LIKE).replace('{1}', processType).replace('{2}', constants.COMPANY_MONTEREY_NUM);
    var fulfillmentResult = buildFulfillmentResult(constants.FULFILLED_STATUS, message);
    
    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      fulfillmentResult.fulfillmentState,
      fulfillmentResult.message
      )
    );

  }

}
