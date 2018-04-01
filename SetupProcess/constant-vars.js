module.exports = {

    /**
     * CIG constants
     */
    COMPANY_NAME: "Capital Insurance Group",
    COMPANY_ABBR: "CIG",
    COMPANY_WEBSITE: "www.ciginsurance.com",
    CLIENT_SERVICE_DEPT: "Client Services Billing Department",
    CLIENT_SERVICES_NUM: "(877) 200-4220",

    // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------

    /**
     * chatbot constants
     */
    BOT_NAME: "CIG_Chatbot",


    // SetupProcess intent
    SETUP_PROCESS_INTENT: "SetupProcess",
    PROCESS_TYPE_SLOT: "processType",
    PROCESS_TYPE_VAL: "processType Value:",
    AUTO_SYNONYM: "auto",
    AUTO_PAY_SLOT: "auto pay",
    PAPERLESS_SYNONYM: "paperless",
    PAPERLESS_SLOT: "paperless billing",
    NO_SETUP_SUPPORT: "Apologies. We currently do not offer support for setting up {0}. Please try again.", // replace {0} with unsupported process
    NO_PROCESS_TYPE_PROVIDED: "What would you like to setup? (Try \'auto pay\' or \'paperless billing\'.)",
    PROCESSES_LIKE: "processes like",
    get SETUP_BOT_RESPONSE() {
        // replace {0} with PROCESSES_LIKE if user did not provide processType slot; else replace it with an empty string
        // replace {1} with processType provided by user or by default processTypes if user did not provide
        // replace {2} with correct phone number of agent
        /**
          * For example, if the user did not provide a processType, then SETUP_BOT_RESPONSE will be:
          *     "You can set up processes like auto pay or paperless billing at www.ciginsurance.com...".
          * If the user DID provide a processType (e.g., 'auto'), then SETUP_BOT_RESPONSE will be:
          *     "You can set up auto pay at www.ciginsurance.com..."
          */
        return(`You can set up {0} {1} online at ${this.COMPANY_WEBSITE}. You may also contact your agent at {2} or contact our ${this.CLIENT_SERVICE_DEPT} at ${this.CLIENT_SERVICES_NUM}.`);
    },

    // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------

    /**
     * debugging constants
     */

    BOT_NAME_TAG: "Bot name: ",
    CURRENT_FILE: "Currently in file:",
    CURRENT_DIR: "Currently in directory:",
    DISPATCH_TAG: "Dispatch userId:",
    INTENT_TAG: "Intent Name:",
    SLOT_TAG: "Slot Type:",

    // errors
    ERROR_BOT_NAME: "The following bot is not supported:",
    ERROR_INTENT: "The following intent is not supported:",
    ERROR_SLOT: "The following slot is not supported:",

    // AWS
    DIALOG_CODE_HOOK: "DialogCodeHook",
    FULFILL_CODE_HOOK: "FulfillmentCodeHook",
    FULFILLED_STATUS: "Fulfilled",
};
