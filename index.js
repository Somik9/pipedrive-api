const addPerson = require('./src/createPerson');
const addOrganization = require('./src/createOrganization');
const addDeal = require('./src/createDeal');

async function main() {
    await addOrganization();
    await addPerson();
    await addDeal();
}

main().catch(err => console.error('An error occurred:', err));
