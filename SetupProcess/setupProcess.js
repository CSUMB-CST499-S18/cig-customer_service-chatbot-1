/**
 * This code executes the SetupProcess intent in the CIG_Chatbot bot. This intent can be invoked
 * in one of two ways: 1) as a lambda initialization and validation (i.e., code hook), or 2) as a fulfillment.
 * Author: Chanel Aquino
 * Date: 3/30/2018
 * 
 */
 
'use strict';

const lexResponses = require('./lexResponses');
const constants = require('./constant-vars.js');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

/**
 * 
 */
function buildValidationResult(isValid, violatedSlot, messageContent) {
    
    if(isValid && messageContent == null) {
        return {
            isValid,
            violatedSlot
        };    
    }
    
    return {
        isValid,
        violatedSlot,
        messageContent
    };
}

/**
 * validates SetupProcess intent
 */
function validateSetupProcess(processType) {
    
    // user did not specify process type
    if(!processType) {
        var errorMessage = constants.NO_PROCESS_TYPE_PROVIDED;
        return buildValidationResult(false, constants.PROCESS_TYPE_SLOT, errorMessage);
        
    }
    
    // valid process
    return buildValidationResult(true, null, null);
}


module.exports = function(intentRequest, callback) {
    var processType = intentRequest.currentIntent.slots.processType;
    
    console.log(`${constants.PROCESS_TYPE_VAL} ${processType}`);
    
    // source of lambda invokation
    const source = intentRequest.invocationSource;
    
    // source of lambda invokation is Dialog Code Hook
    if(source === constants.DIALOG_CODE_HOOK) {
        
        const slots = intentRequest.currentIntent.slots;
        const setupProcessValidationResult = validateSetupProcess(processType);
        
        // invalid result: prompt user for slot
        if(!setupProcessValidationResult.isValid) {
            slots[`${setupProcessValidationResult.violatedSlot}`] = null;
            callback(lexResponses.elicitSlot(
                intentRequest.sessionAttributes, 
                intentRequest.currentIntent.name, 
                slots, 
                setupProcessValidationResult.violatedSlot,
                setupProcessValidationResult.messageContent));    
        }
        
        // valid result: delegate the intent
        callback(lexResponses.delegate(
            intentRequest.sessionAttributes, 
            intentRequest.currentIntent.slots));
        return;
    }
    
}