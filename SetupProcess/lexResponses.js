/**
 * This executes different types of responses that Lex will provide back to the user.
 * Author: Chanel Aquino
 * Date: 3/30/2018
 * 
 */
 
'use strict';

const constants = require('./constant-vars');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);


/**
 * Delegate
 * Directs Amazon Lex to choose the next course of action based on the bot configuration. 
 */
module.exports.delegate = function(sessionAttributes, slots) {
 
 console.log(`In delegate()\n
   sessionAttributes: ${Object.keys(sessionAttributes)}\n
   slots: ${Object.keys(slots)}`);
   
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Delegate',
            slots,
        },
    };
}

/**
 * ElicitSlot
 * Informs Amazon Lex that the user is expected to provide a slot value in the response.
 */
module.exports.elicitSlot = function(sessionAttributes, intentName, slots, slotToElicit, message) {
 
 console.log(`In elicitSlot()\n
   sessionAttributes: ${Object.keys(sessionAttributes)}\n
   intentName: ${intentName}\n
   slots: ${Object.keys(slots)},
   slotToElicit: ${slotToElicit}\n
   message content type: ${message.contentType}\n
   message: ${message.content}`);
   
  return {
    sessionAttributes,
    dialogAction: {
      type: 'ElicitSlot',
      intentName,
      slots,
      slotToElicit,
      message
    }
  };
};

/**
 * Close
 * Close dialog with the customer, reporting fulfillmentState of Failed or Fulfilled 
 */
module.exports.close = function(sessionAttributes, fulfillmentState, message) {
 console.log(`In close()\n
   sessionAttributes: ${Object.keys(sessionAttributes)}\n
   fullfillmentState: ${fulfillmentState}\n
   message content type: ${message.contentType}\n
   message: ${message.content}`);
   
 return {
  sessionAttributes,
  dialogAction: {
    type: 'Close',
    fulfillmentState,
    message
  }
 };
};