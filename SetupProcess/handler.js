/**
 * This is the main handler for the SetupProcess intent in the CIG_Chatbot bot.
 * Author: Chanel Aquino
 * Date: 3/31/2018
 *
 * TODO: Direct all intents to this main handler (or a centralized one called CIG_Processor) and modularize code moving forward.
 * TODO: Create separate directories logically:
 *      1) One for each intent
 *          i) One for global constants relative to intent: slots and debugging tags
 *          ii) One for intent responses relative to intent
 *      2) One for global constants (e.g., BOT_NAME, tags for debugging, constants for each intent name)
 */

'use strict';

const dispatch = require('./dispatch');
const constants = require('./constant-vars');
const assert = require('assert');

console.log(`${constants.CURRENT_FILE} ${__filename}`);
console.log(`${constants.CURRENT_DIR} ${__dirname}`);

exports.handler = (event, context, callback) => {
    try {
        console.log(`${constants.BOT_NAME_TAG} ${event.bot.name}`);
        assert.equal(event.bot.name, constants.BOT_NAME, `${constants.ERROR_BOT_NAME} ${event.bot.name}`);
        dispatch(event,
            (response) => {
                callback(null, response);
            }
        );
    } catch (err) {
        callback(err);
    }
};
