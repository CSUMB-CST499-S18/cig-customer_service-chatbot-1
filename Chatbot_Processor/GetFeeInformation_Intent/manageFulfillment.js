'use strict';

const constants = require('../constant-vars');
const lexResponses = require('../lexResponses');
console.log(`${constants.CURRENT_FILE} ${__filename}\n${constants.CURRENT_DIR} ${__dirname}`);

module.exports = function(intentRequest, callback) {

  const sessionAttributes = intentRequest.sessionAttributes;
  const slots = intentRequest.currentIntent.slots;
  const feeType = slots.feeType;
  
  
  // List of all currently possible fee types
  var fees = {};
  fees["Installment"] = "A $6 installment fee is charged with every installment if you are not enrolled in Auto Pay.  Please see <information> if you would like to setup Auto Pay.";
  fees["Late"] = "A $20 late fee is charged when a payment due date is passed without payment.  This fee is added to your next bill.";
  fees["Reinstatement"] = "A $15 reinstatement fee is charged to activate a previously cancelled policy.";
  fees["NSF"] = "A $35 non-sufficient funds (NSF) fee is charged when a payment from a bank account does not clear.";
  
  callback(lexResponses.close(sessionAttributes, 'Fulfilled', {'contentType': 'PlainText', 'content': fees[feeType]}));

}