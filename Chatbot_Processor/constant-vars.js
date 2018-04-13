module.exports = {

    // TODO: get slot values from slot json files rather than having variables like AUTO_PAY_SLOT, PAYMENT_PLAN_SYNONYM, etc.
    // TODO: add constants for remaining intents
    /**
     *
     *
     * CIG constants
     *
     *
     */
    COMPANY_NAME: "Capital Insurance Group",
    COMPANY_ABBR: "CIG",
    COMPANY_WEBSITE: "www.ciginsurance.com",
    COMPANY_CLIENT_SERVICE_DEPT: "Client Services Billing Department",
    COMPANY_CLIENT_SERVICES_NUM: "(877) 200-4220",
    COMPANY_MONTEREY_NUM: "(831) 233-5500",

    /**
     *
     *
     * debugging constants
     *
     *
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


    /**
     *
     *
     * chatbot constants
     *
     *
     */
    BOT_NAME: "CIG_Chatbot",
    DEFAULT_NUM_BOT_RESPONSES: 5,


    // ------------------------------------
    // Greeting intent
    // ------------------------------------
    //
    //
    GREETING_INTENT: "Greeting",
    GOOD_MORNING: "Good morning!",
    GOOD_AFTERNOON: "Good afternoon!",
    GOOD_EVENING: "Good evening!",
    HELLO: "Hello!",
    HI_THERE: "Hi there!",
    GREETINGS: "Greetings!",
    get BOT_INTRO() {
      return(`I am the ${this.COMPANY_NAME} chatbot, and I am here to help.`);
    },
    get GREET_BOT_RESPONSE() {
      // replace {0} with GOOD_MORNING,etc. depending on time of day
      // replace {1} with BOT_INTRO if the user greeted the bot
      return(`{0} {1} Please let me know what you need help with.`);
    },
    get GREET_BOT_RESPONSE2() {
      // replace {0} with GOOD_MORNING,etc. depending on time of day
      // replace {1} with BOT_INTRO if the user greeted the bot
      return(`{0} {1} How may I be of assistance to you?`);
    },
    get GREET_BOT_RESPONSE3() {
      // replace {0} with GOOD_MORNING,etc. depending on time of day
      // replace {1} with BOT_INTRO if the user greeted the bot
      return(`{0} {1} What can I help you with today?`);
    },
    get GREET_BOT_RESPONSE4() {
      // replace {0} with GOOD_MORNING,etc. depending on time of day
      // replace {1} with BOT_INTRO if the user greeted the bot
      return(`{0} {1} What can I do to help you today?`);
    },
    get GREET_BOT_RESPONSE5() {
      // replace {0} with GOOD_MORNING,etc. depending on time of day
      // replace {1} with BOT_INTRO if the user greeted the bot
      return(`{0} {1} Please let me know how I can help you today.`);
    },

    // ------------------------------------
    // SetupProcess intent
    // ------------------------------------
    //
    //
    SETUP_PROCESS_LAMBDA_DIR: "~/SetupProcess_Intent",
    SETUP_PROCESS_INTENT: "SetupProcess",
    PROCESS_TYPE_SLOT: "processType",
    PROCESS_TYPE_VAL: "processType Value:",
    AUTO_SYNONYM: "auto",
    AUTO_PAY_SLOT: "auto pay",
    PAPERLESS_SYNONYM: "paperless",
    PAPERLESS_SLOT: "paperless billing",
    get DEFAULT_PROCESS_TYPE() {
      return (`${this.AUTO_PAY_SLOT} or ${this.PAPERLESS_SLOT}`);
    },
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
        return (`You can set up {0} {1} online at ${this.COMPANY_WEBSITE}. You may also contact your agent at {2} or contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get SETUP_BOT_RESPONSE2() {
      // replace {0} with PROCESSES_LIKE if user did not provide processType slot; else replace it with an empty string
      // replace {1} with processType provided by user or by default processTypes if user did not provide
      // replace {2} with correct phone number of agent
      return (`To set up {0} {1}, please visit us online at ${this.COMPANY_WEBSITE} or contact your agent at {2}. You can also contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get SETUP_BOT_RESPONSE3() {
      // replace {0} with PROCESSES_LIKE if user did not provide processType slot; else replace it with an empty string
      // replace {1} with processType provided by user or by default processTypes if user did not provide
      // replace {2} with correct phone number of agent
      return (`If you would like to set up {0} {1}, please visit us online at ${this.COMPANY_WEBSITE} or contact your agent at {2}. You can also contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get SETUP_BOT_RESPONSE4() {
      // replace {0} with PROCESSES_LIKE if user did not provide processType slot; else replace it with an empty string
      // replace {1} with processType provided by user or by default processTypes if user did not provide
      // replace {2} with correct phone number of agent
      return(`We'd be glad to help you set up {0} {1}! To do so, please visit us online at ${this.COMPANY_WEBSITE}. You may also call your agent at {2} or contact our our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get SETUP_BOT_RESPONSE5() {
      // replace {0} with PROCESSES_LIKE if user did not provide processType slot; else replace it with an empty string
      // replace {1} with processType provided by user or by default processTypes if user did not provide
      // replace {2} with correct phone number of agent
      return(`One of our client service representatives would be glad to help you set up {0} {1}! Please contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}. You may also visit us online at ${this.COMPANY_WEBSITE} or call your agent at {2}.`);
    },

    // ------------------------------------
    // ChangeInformation intent
    // ------------------------------------
    //
    //
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
    get DEFAULT_INFO_TYPE() {
      return (`${this.DUE_DATE_SLOT} or ${this.PAYMENT_PLAN_SLOT}`);
    },
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
    get CHANGE_INFO_BOT_RESPONSE2() {
      // replace {0} with INFORMATION_SUCH_AS if user did not provide informationType; else replace with empty string
      // replace {1} with informationType provided by user or by default informationTypes if user did not provide
      return(`To make changes to {0} your {1}, please contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get CHANGE_INFO_BOT_RESPONSE3() {
      // replace {0} with INFORMATION_SUCH_AS if user did not provide informationType; else replace with empty string
      // replace {1} with informationType provided by user or by default informationTypes if user did not provide
      return(`If you would like to make changes to {0} your {1}, please contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get CHANGE_INFO_BOT_RESPONSE4() {
      // replace {0} with INFORMATION_SUCH_AS if user did not provide informationType; else replace with empty string
      // replace {1} with informationType provided by user or by default informationTypes if user did not provide
      return(`One of our client service representatives would be glad to help you make changes to {0} your {1}! Please contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM} to get this started.`);
    },
    get CHANGE_INFO_BOT_RESPONSE5() {
      // replace {0} with INFORMATION_SUCH_AS if user did not provide informationType; else replace with empty string
      // replace {1} with informationType provided by user or by default informationTypes if user did not provide
      return(`We'd be glad to help you make changes to {0} your {1}! Please contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM} to get this started.`);
    },
    
    // --------------------------------------------------
    // DifferentPayment intend and GetCopy Intent
    // --------------------------------------------------
    //
    //
    PAY_TYPE_SLOT: "payType",
    PAY_TYPE_VAL: "payType Value:",
    PAYMENT_VALUE: "payment",
    get DEFAULT_PAY_TYPE() {
      return (`${this.PAY_TYPE_SLOT}`);
    },
    
    
    // ------------------------------------
    // DifferentPayment intent
    // ------------------------------------
    //
    //
    DIFFERENT_PAYMENT_LAMBDA_DIR: "~/DifferentPayment_Intent",
    DIFFERENT_PAYMENT_INTENT: "DifferentPayment",
    VALUE_SLOT: "value",
    VALUE_VAL: "value Value:",
    get DIFFERENT_PAYMENT_RESPONSE() {
        // replace {0} with PAYMENT_VALUE if user did not provide payType slot;
        return (`Please, contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM} to discuss the change in {0}.`);
    },
    get DIFFERENT_PAYMENT_RESPONSE2() {
        return (`You can contact customer service at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get DIFFERENT_PAYMENT_RESPONSE3() {
        return (`Contacting customer service at ${this.COMPANY_CLIENT_SERVICES_NUM} would be your next step for more information.`);
    },
    get DIFFERENT_PAYMENT_RESPONSE4() {
        return (`Unfortunately, I cannot help answering your question. Contact customer service at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get DIFFERENT_PAYMENT_RESPONSE5() {
        return (`I cannot determine the reasoning behind the change, please, contact customer service at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    
    
    // ------------------------------------
    // GetNoticeInfo intent
    // ------------------------------------
    //
    //
    GET_NOTICE_INFO_LAMBDA_DIR: "~/GetNoticeInfo_Intent",
    GET_NOTICE_INFO_INTENT: "GetNoticeInfo",
    NOTICE_VALUE: "notice",
    get GET_NOTICE_INFO_RESPONSE() {
        return (`I am unable to gather all the appropriate information. Contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get GET_NOTICE_INFO_RESPONSE2() {
        return (`You will need to contact customer service at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get GET_NOTICE_INFO_RESPONSE3() {
        return (`Contacting customer service at ${this.COMPANY_CLIENT_SERVICES_NUM} would be your next step for more information about this ${this.NOTICE_VALUE}.`);
    },
    get GET_NOTICE_INFO_RESPONSE4() {
        return (`Unfortunately, I cannot determine the ${this.NOTICE_VALUE}. Contact customer service at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    get GET_NOTICE_INFO_RESPONSE5() {
        return (`I cannot determine the reasoning behind the ${this.NOTICE_VALUE}, please, contact customer service at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    },
    
    // ------------------------------------
    // GetCopy intent
    // ------------------------------------
    //
    //
    GET_COPY_LAMBDA_DIR: "~/GetCopy_Intent",
    GET_COPY_INTENT: "GetCopy",
    PAYMENT_VALUE: "notice",
    get GET_COPY_RESPONSE() {
        return (`You can get a copy of your bill online through ${this.COMPANY_WEBSITE}.`);
    },
    get GET_COPY_RESPONSE2() {
        return (`Please, visit our website at ${this.COMPANY_WEBSITE} to get a copy.`);
    },
    get GET_COPY_RESPONSE3() {
        return (`I am unable to retrieve your copy, but you can visit ${this.COMPANY_WEBSITE} to view it.`);
    },
    get GET_COPY_RESPONSE4() {
        return (`Unfortunately, I cannot find your copy. It can be found at ${this.COMPANY_WEBSITE}.`);
    },
    get GET_COPY_RESPONSE5() {
        return (`Your copy is waiting for you at ${this.COMPANY_WEBSITE}.`);
    },
    
    
    // ------------------------------------
    // GetPolicyInfo intent
    // ------------------------------------
    //
    //return (`You can set up {0} {1} online at ${this.COMPANY_WEBSITE}. You may also contact your agent at {2} or contact our ${this.COMPANY_CLIENT_SERVICE_DEPT} at ${this.COMPANY_CLIENT_SERVICES_NUM}.`);
    GET_POLICY_INFO_LAMBDA_DIR: "~/GetPolicyInfo_Intent",
    GET_POLICY_INFO_INTENT: "GetPolicyInfo",
    POL_SYN_SLOT: "polSyn",
    HOME_INSURANCE_VALUE: "HOC",
    AUTO_INSURANCE_VALUE: "PAC",
    HOME_VALUE: "home",
    AUTOMOBILE_VALUE: "auto",
    get DEFAULT_POL_SYN_TYPE() {
      return (`${this.POL_SYN_SLOT}`);
    },
    get GET_POLICY_INFO_RESPONSE() {
        return (`You have the following: {0}.`);
    },
    get GET_POLICY_INFO_RESPONSE2() {
        return (`You have {0} insurance.`);
    },
    get GET_POLICY_INFO_RESPONSE3() {
        return (`You are covered for {0}.`);
    },
    get GET_POLICY_INFO_RESPONSE4() {
        return (`The insurance that you have are the following: {0}.`);
    },
    get GET_POLICY_INFO_RESPONSE5() {
        return (`I pulled up your information and you have {0}.`);
    },
    
    
};
