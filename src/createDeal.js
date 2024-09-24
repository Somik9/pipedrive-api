const pipedrive = require('pipedrive');

async function addDeal() {
    const defaultClient = new pipedrive.ApiClient();
    defaultClient.authentications.api_key.apiKey = 'YOUR_API_KEY';

    const api = new pipedrive.DealsApi(defaultClient);

    const data = {
        title: 'Test Deal',
        value: 100,
        currency: 'USD',
        stage_id: 1,
        status: 'open',
        expected_close_date: '2022-02-11',
    };

    try {
        console.log('Sending request to add deal...');
        const response = await api.addDeal(data);
        console.log('Deal was added successfully', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;
        console.log('Adding deal failed', errorToLog);
    }
}

module.exports = addDeal;
