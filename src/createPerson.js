const pipedrive = require('pipedrive');

async function addPerson() {
    const defaultClient = new pipedrive.ApiClient();
    defaultClient.authentications.api_key.apiKey = '72aed2b4cc2a82b890b41bc7927901272211a255';

    const api = new pipedrive.PersonsApi(defaultClient);

    const data = {
        name: 'John Doe',
        email: ['johndoe@example.com'],
        phone: ['+1234567890'],
    };

    try {
        console.log('Sending request to add person...');
        const response = await api.addPerson(data);
        console.log('Person was added successfully', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;
        console.log('Adding person failed', errorToLog);
    }
}

module.exports = addPerson;
