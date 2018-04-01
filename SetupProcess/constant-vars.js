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
    AUTO_PAY_SLOT: "auto",
    PAPERLESS_SLOT: "paperless",
    NO_SETUP_SUPPORT: "Apologies. We currently do not offer support for setting up {0}. Please try again.", // replace {0} with unsupported process
    NO_PROCESS_TYPE_PROVIDED: "What would you like to setup? (Try \'auto pay\' or \'paperless billing\'.)",
    get SETUP_BOT_RESPONSE() {
        // replace {0} with processType and {1} with correct phone number of agent
        return(`You can setup {0} online at ${this.COMPANY_WEBSITE}. You may also contact your agent at {1} or contact our ${this.CLIENT_SERVICE_DEPT} at ${this.CLIENT_SERVICES_NUM}.`);
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
