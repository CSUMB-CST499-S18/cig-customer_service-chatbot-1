/**
 * This executes different types of responses that Lex will provide back to the user.
 * Author: Chanel Aquino
 * Date: 3/30/2018
 * 
 */
 
'use strict';

const constants = require('./constant-vars.js');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

// currently does nothing (for now)
module.exports.delegate = function(sessionAttributes, slots) {
    return {
        sessionAttributes,
        dialogAction: {
            type: 'Delegate',
            slots,
        },
    };
}