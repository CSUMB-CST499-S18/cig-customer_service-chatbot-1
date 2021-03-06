const assert = require('chai').assert;
const setupProcess = require('../Chatbot_Processor/SetupProcess_Intent/setupProcess.js');

describe('FulfillmentCodeHook with no slots,redirected from code dialog', () => {
  it('Customer asks, \'how can I setup\'', function(done) {

    // jest.setTimeout(15000);
    const intentRequest = {
      messageVersion: '1.0',
      invocationSource: 'FulfillmentCodeHook',
      sessionAttributes: null,
      bot: {
        name: 'CIG_Chatbot',
        alias: null,
        version: '$LATEST'
      },
      outputDialogMode: 'Text',
      currentIntent: {
        name: 'SetupProcess',
        slots: { processType: 'auto' },
        confirmationStatus: 'Confirmed'
      },
      inputTranscript: 'yes'
    };

    const response = setupProcess(intentRequest, true);
    assert.equal(response.dialogAction.fulfillmentState, 'Fulfilled');
    console.log(`message: ${response.dialogAction.message.content}`);
    done();
  }); // end it()
}); // end describe(FulfillmentCodeHook with no slots)
