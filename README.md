# Pipedrive API Integration

This project implements an integration with the Pipedrive API, focusing on three main functionalities:
1. **Creating a Person**
2. **Creating an Organization**
3. **Creating a Deal**

These modules enable easy interaction with Pipedrive's API to automate CRM operations.

---

## Table of Contents
- [Getting Started](#getting-started)
- [Features](#features)
  - [1. Create Person](#1-create-person)
  - [2. Create Organization](#2-create-organization)
  - [3. Create Deal](#3-create-deal)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)

---

## Getting Started

To use this integration, ensure that you have an active Pipedrive API key. This can be obtained by visiting your Pipedrive account and navigating to **Settings > API**.

---

## Features

### 1. Create Person
This module allows you to create a new person in the Pipedrive system using the provided name, email, and other contact details.

#### Example:
```bash
POST /persons
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

### 2. Create Organization
This module enables you to create a new organization within Pipedrive.

#### Example:
```bash
POST /organizations
{
  "name": "Acme Corporation",
  "address": "123 Main St, Springfield"
}
```

### 3. Create Deal
With this module, you can create a deal associated with a person or organization.

#### Example:
```bash
POST /deals
{
  "title": "New Deal with Acme Corporation",
  "value": 1000,
  "currency": "USD",
  "org_id": 123,
  "person_id": 456
}
```

---

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pipedrive-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd pipedrive-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

---

## Usage

To start using the Pipedrive API modules, follow the instructions below:

1. Ensure that your Pipedrive API key is set as an environment variable:
    ```bash
    export PIPEDRIVE_API_KEY=your-api-key-here
    ```
2. Run the script to create a person, organization, or deal:
    ```bash
    node createPerson.js
    node createOrganization.js
    node createDeal.js
    ```

---

## API Documentation

For more detailed information on how the API works, you can visit the official Pipedrive API documentation:

- [Pipedrive API Documentation](https://developers.pipedrive.com/docs/api/v1)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
