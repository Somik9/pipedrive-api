const pipedrive = require('pipedrive');

async function addOrganization() {
    const defaultClient = new pipedrive.ApiClient();
    defaultClient.authentications.api_key.apiKey = '72aed2b4cc2a82b890b41bc7927901272211a255';

    const api = new pipedrive.OrganizationsApi(defaultClient);

    const data = {
        name: 'Faststone',
        owner_id: 1,
        visible_to: "3",
    };

    try {
        console.log('Sending request to add organization...');
        const response = await api.addOrganization(data);
        console.log('Organization was added successfully', response);
    } catch (err) {
        const errorToLog = err.context?.body || err;
        console.log('Adding organization failed', errorToLog);
    }
}

module.exports = addOrganization;
