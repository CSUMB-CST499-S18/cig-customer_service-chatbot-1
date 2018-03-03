'use strict';

const helloIntentName = "hello";
const goodbyeIntentName = "finish";

function nextIntent(sessionAttributes, message) {
    console.log('nextIntent: ${JSON.stringify(message}');
    return {
        sessionStorage,
        dialogAction: {
            type:'ElicitIntent',
            message: message
        }
    };
}

// function elicitSlot(sessionAttributes, intentName, slots, slotToElicit, message) {
//     return {
//         sessionAttributes,
//         dialogAction: {
//             type: 'ElicitSlot',
//             intentName,
//             slots,
//             slotToElicit,
//             message,
//         },
//     };
// }

// function confirmIntent(sessionAttributes, intentName, slots, message) {
//     return {
//         sessionAttributes,
//         dialogAction: {
//             type: 'ConfirmIntent',
//             intentName,
//             slots,
//             message,
//         },
//     };
// }

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

// function delegate(sessionAttributes, slots) {
//     return {
//         sessionAttributes,
//         dialogAction: {
//             type: 'Delegate',
//             slots,
//         },
//     };
// }

function getBalance() {
    // Function to get customers balance
}

function getDueDate() {
    // Function to get customers due date
}

// Function to greet client
function helloIntent(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes || {};
    var msg = "Hi! I am the CIG bot here to help you. You can say things like, I want to pay my bill or how much is my bill";
    callback(nextIntent(
        sessionAttributes, 
        {
            'contentType': 'PlainText',
            'content': msg
        }));
}

// Function for finishing
function goodbyeIntent(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes || {};
    callback(close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': 'Thank you! Good Bye!'
    }));
}

// Function for getting payment amount and date
function paymentInfoIntent(intentRequest, callback) {
    const sessionAttributes = intentRequest.sessionAttributes || {};
    const slots = intentRequest.currentIntent.slots;
    const infoType = slots.value;
    
    if (infoType === 'date') {
        // return getBalance();
        callback(close(sessionAttributes, 'Fulfilled', {
            'contentType': 'PlainText',
            'content': 'Youre due date is currently set for the 15th of every month by 8PM(PST/PDT)'
        }));
    } else {
        // return getDueDate();
        callback(close(sessionAttributes, 'Fulfilled', {
            'contentType': 'PlainText',
            'content': 'Youre minimum payment is 50.00USD'
        }));
    }
}

function makePaymentIntent(intentRequest,callback) {
    const sessionAttributes = intentRequest.sessionAttributes || {};
    //const slots = intentRequest.currentIntent.slots;
    //var bill = slots.Bill;
    
    callback(close(sessionAttributes, 'Fulfilled', {
        'contentType': 'PlainText',
        'content': 'You can pay your bill through ciginsurance.com, contacting your local agent, or contacting Client Services Billing Department at (877)200-4220'
    }));
}


// Dispatching intents
function dispatch(intentRequest, callback) {
    const intentName= intentRequest.currentIntent.name;
    
    if (intentName === helloIntentName) {
        return helloIntent(intentRequest, callback);
    } else if(intentName === 'RetrievePaymentInfo') {
        return paymentInfoIntent(intentRequest, callback);
    } else if(intentName === 'MakePayment') {
        return makePaymentIntent(intentRequest, callback);
    } else if(intentName === goodbyeIntentName) {
        return goodbyeIntent(intentRequest, callback);
    }
    
    throw new Error('Intent with name ${intentName} is not supported');
}

exports.handler = (event, context, callback) => {
    try {
        dispatch(event,
            (response) => {
                callback(null, response);
            });
    }
    catch (err) {
        callback(err);
    }
};
