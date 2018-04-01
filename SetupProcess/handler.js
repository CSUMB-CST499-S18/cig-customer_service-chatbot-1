/**
 * This is the main handler for all intents in the CIG_Chatbot bot.
 * Author: Chanel Aquino
 * Date: 4/1/2018
 *
 * TODO: Direct all intents to this main handler and modularize code moving forward.
 * TODO: Create separate directories logically:
 *      1) One for each intent
 *          i) One for global constants relative to intent: slots and debugging tags
 *          ii) One for intent responses relative to intent
 *      2) One for global constants (e.g., BOT_NAME, tags for debugging, constants for each intent name)
 */

'use strict';

const constants = require('./constant-vars');
const dispatch = require(constants.DISPATCH_LAMBDA_DIR);
const assert = require('assert');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

exports.handler = (event, context, callback) => {
    try {
        console.log(`${constants.BOT_NAME_TAG} ${event.bot.name}`);
        assert.equal(event.bot.name, constants.BOT_NAME, `${constants.ERROR_BOT_NAME} ${event.bot.name}`);
        dispatch(event, (response) => callback(null, response));
    } catch (err) {
        callback(err);
    }
};
