module.exports = {

    /**
     * CIG constants
     */
    COMPANY_NAME: "Capital Insurance Group",
    COMPANY_ABBR: "CIG",
    COMPANY_WEBSITE: "www.ciginsurance.com",
    COMPANY_CLIENT_SERVICE_DEPT: "Client Services Billing Department",
    COMPANY_CLIENT_SERVICES_NUM: "(877) 200-4220",
    COMPANY_MONTEREY_NUM: "(831) 233-5500",


    // ---------------------------------------------------------------------------
    // ---------------------------------------------------------------------------

    /**
     * directory constants
     */

    BOT_LAMBDA_DIR: ".",
    get CHANGE_INFO_LAMBDA_DIR() { return(`${this.BOT_LAMBDA_DIR}/ChangeInformation_Intent`)},
    get SETUP_PROCESS_LAMBDA_DIR() { return(`${this.BOT_LAMBDA_DIR}/SetupProcess_Intent`)},
    get DISPATCH_LAMBDA_DIR() { return(`${this.BOT_LAMBDA_DIR}/dispatch`)},
    get HANDLER_LAMBDA_DIR() { return(`${this.BOT_LAMBDA_DIR}/handler`)},
    get LEX_RESPONSES_LAMBDA_DIR() { return(`${this.BOT_LAMBDA_DIR}/lexResponses`)},
    /**
     * chatbot constants
     */
    BOT_NAME: "CIG_Chatbot",


    // SetupProcess intent
    SETUP_PROCESS_LAMBDA_DIR: "~/SetupProcess_Intent",
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
        return(`You can set up {0} {1} online at ${this.COMPANY_WEBSITE}. You may also contact your agent at {2} or contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },

    // ChangeInformation intent
    CHANGE_INFO_LAMBDA_DIR: "~/ChangeInformation_Intent",
    CHANGE_INFO_INTENT: "ChangeInformation",
    INFORMATION_TYPE_SLOT: "informationType",
    INFORMATION_TYPE_VAL: "informationType Value:",
    DUE_DATE_SYNONYM: "due",
    DUE_DATE_SYNONYM2: "date",
    DUE_DATE_SLOT: "due date",
    PAYMENT_PLAN_SYNONYM: "pay",
    PAYMENT_PLAN_SYNONYM2: "plan",
    PAYMENT_PLAN_SLOT: "payment plan",
    INFORMATION_SUCH_AS: "information such as",
    get CHANGE_INFO_BOT_RESPONSE() {
        // replace {0} with INFORMATION_SUCH_AS if user did not provide informationType; else replace with empty string
        // replace {1} with informationType provided by user or by default informationTypes if user did not provide
        /**
          * For example, if the user did not provide an informationType, then CHANGE_INFO_BOT_RESPONSE will be:
          *     "Please contact our Client Services Billing Department at (877) 200-4220 to make any changes to information such as your payment plan or due date".
          * If the user DID provide an informationType (e.g., 'due date', 'date', 'payment', or 'pay plan'), then CHANGE_INFO_BOT_RESPONSE will be:
          *     "Please contact our Client Services Billing Department at (877) 200-4220 to make any changes to your payment plan".
          */
        return(`Please contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM} to make any changes to {0} your {1}.`);
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
