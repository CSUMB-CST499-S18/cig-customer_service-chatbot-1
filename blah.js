'use strict';

/**
 * This code will serve as a customer service bot for the Capital Insurance Group
 * Bot, Intent, and Slot models which are compatible with this sample can be found in the Lex Console
 * as part of the 'CIGCustomerServiceBot'.
 * 
 */
 
 // TODO: JSON object of bot responses
 // TODO: enhance
 // TODO: YouTube tutorials on response cards / making chat bot more interactive

// --------------- Helpers that build all of the responses -----------------------

/**
 * informs Amazon Lex that the user is expected to provide a slot value in the response
 */
function elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message) {
    return {
        sessionAttributes,
    dialogAction: {
    type: 'ElicitSlot',
        intentName,
        slots,
        slotToElicit,
        message
    },
    };
}


/**
 * informs Amazon Lex that the user is expected to give a yes or no answer to confirm or deny the current intent
 */
// don't need this... yet (because we don't need customer to confirm anything... yet)
//function confirmIntent(sessionAttributes, intentName, slots, message) {
//    return {
//        sessionAttributes,
//    dialogAction: {
//    type: 'ConfirmIntent',
//        intentName,
//        slots,
//        message,
//    },
//    };
//}


/**
 * informs Amazon Lex not to expect a response from the user
 */
function close(sessionAttributes, fulfillmentState, message) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message,
        },
    };
}

// directs Amazon Lex to choose the next course of action based on the bot configuration
//function delegate(sessionAttributes, slots) {
//    return {
//        sessionAttributes,
//    dialogAction: {
//    type: 'Delegate',
//        slots,
//    },
//    };
//}


// --------------- intents -----------------------
// TODO: modularize intents
/**
 * called when the customer specifies an intent 
 */
 
function dispatch(intentRequest, callback) {
    // console.log(JSON.stringify(intentRequest, null, 2));
    console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
    
    // intent information
    const intentName = intentRequest.currentIntent.name;
    const sessionAttributes = intentRequest.sessionAttributes;
    const slots = intentRequest.currentIntent.slots;
    
    // ----------- SetUpProcess intent ---------------
    if (intentName === 'SetUpProcess') {
        const processType = slots.processType;
        callback(
            close(
                sessionAttributes, 
                'Fulfilled', 
                {
                    'contentType': 'PlainText',
                    'content': `You can set up ${processType} online through www.ciginsurance.com. You may also contact your agent at [BLANK] or contact our Client Services Billing Department at (877) 200-4220.`
                }
            )
        );
    
    // ----------- ChangeInformation intent ---------------    
    } else if (intentName === 'ChangeInformation') {
        const informationType = slots.informationType;
        callback(
            close(
                sessionAttributes, 
                'Fulfilled', 
                {
                    'contentType': 'PlainText',
                    'content': `To change your ${informationType}, please contact our Client Services Billing Department at (877) 200-4220.`
                }
            )
        );
    }
    
    // ----------- GreetCustomer intent ---------------    
    else if (intentName === 'GreetCustomer') {
        callback(
            close(
                sessionAttributes, 
                'Fulfilled', 
                {
                    'contentType': 'PlainText',
                    'content': `Hello! I am the CIG Customer Service chat bot. How may I assist you today?`
                }
            )
        );
    }
    
   
    throw new Error(`Intent with name ${intentName} not supported`);
}

// --------------- Main handler -----------------------
 
// Route the incoming request based on intent.
// The JSON body of the request is provided in the event slot.
exports.handler = (event, context, callback) => {
    
    try {
        
        console.log(`event.bot.name=${event.bot.name}`);
    
        // sanity check to prevent invoking this Lambda function from an undesired source
        if (event.bot.name != 'CIGCustomerServiceBot') {
             callback('Invalid Bot Name');
        }
    
       dispatch(event,
            (response) => {
                callback(null, response);
            });
    } catch (err) {
        callback(err);
    }
};