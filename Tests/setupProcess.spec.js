const assert = require('chai').assert;
const setupProcess = require('../Chatbot_Processor/SetupProcess_Intent/setupProcess.js');

describe('FulfillmentCodeHook with no slots', () => {
  it('Customer asks, \'how can I setup\'', done => {
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
        slots: { processType: null },
        confirmationStatus: 'Confirmed'
      },
      inputTranscript: 'yes'
    };

    setupProcess(intentRequest).then(response => {
      //assert.equal(response.dialogAction.type, 'Close');
      assert.equal(response.dialogAction.fulfillmentState, 'Fulfilled');
      done();
    });
  });
});
