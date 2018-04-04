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
function fulfillChangeInfo(informationType) {
  console.log(`Fulfilling ${constants.CHANGE_INFO_INTENT} intent\n
    informationType: ${informationType}`);

  if(informationType === `${constants.PAYMENT_PLAN_SLOT} or ${constants.DUE_DATE_SLOT}`) {
    return buildFulfillmentResult(
      constants.FULFILLED_STATUS,
      constants.CHANGE_INFO_BOT_RESPONSE.replace('{0}', constants.INFORMATION_SUCH_AS).replace('{1}', informationType)
    );
  }

  return buildFulfillmentResult(
    constants.FULFILLED_STATUS,
    constants.CHANGE_INFO_BOT_RESPONSE.replace('{0}', "").replace('{1}', informationType)
  );
}

/**
  * handleFulfillmentCodeHook(intentRequest)
  */
module.exports = function(intentRequest, redirectedFromDialogs = false, callback) {

  // this call to handleFulfillmentCodeHook did not come from the handler for dialog code hook
  if(!redirectedFromDialogs) {
    console.log(`In ${constants.FULFILL_CODE_HOOK} FOR ${constants.CHANGE_INFO_INTENT}`);

    var informationType = intentRequest.currentIntent.slots.informationType;
    console.log(`${constants.INFORMATION_TYPE_VAL} ${informationType}`);

    var fulfillmentResult = fulfillChangeInfo(informationType);

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

    var informationType = `${constants.PAYMENT_PLAN_SLOT} or ${constants.DUE_DATE_SLOT}`;
    var message = constants.CHANGE_INFO_BOT_RESPONSE.replace('{0}', constants.INFORMATION_SUCH_AS).replace('{1}', informationType);
    var fulfillmentResult = buildFulfillmentResult(constants.FULFILLED_STATUS, message);

    callback(lexResponses.close(
      intentRequest.sessionAttributes,
      fulfillmentResult.fulfillmentState,
      fulfillmentResult.message
      )
    );

  }

}
