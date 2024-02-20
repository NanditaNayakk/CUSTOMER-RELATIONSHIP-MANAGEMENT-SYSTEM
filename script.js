// Define an array to store customer details
let customers = [];

// Function to add a customer to the list
function addCustomer(firstName, lastName, email) {
    // Create a customer object
    const customer = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    
    // Add the customer to the array
    customers.push(customer);
    
    // Display the updated customer list
    displayCustomerList();
}

// Function to display the customer list
function displayCustomerList() {
    const customerList = document.getElementById('customer-list-items');
    
    // Clear the existing list items
    customerList.innerHTML = '';
    
    // Loop through the customers array and create list items for each customer
    customers.forEach(customer => {
        const listItem = document.createElement('li');
        listItem.textContent = `${customer.firstName} ${customer.lastName} - ${customer.email}`;
        customerList.appendChild(listItem);
    });
}

// Function to fetch customer details by email
function getCustomerDetailsByEmail(email) {
    // Find the customer with the given email
    const customer = customers.find(customer => customer.email === email);
    
    if (customer) {
        // If customer is found, display their details
        alert(`Customer Details:\nName: ${customer.firstName} ${customer.lastName}\nEmail: ${customer.email}`);
    } else {
        // If customer is not found, display an error message
        alert('Customer not found!');
    }
}

// Event listener for the add customer form submission
document.getElementById('add-customer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    
    // Add customer
    addCustomer(firstName, lastName, email);
    
    // Clear form inputs
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
});

// Event listener for fetching customer details
document.getElementById('customer-list-items').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        const email = event.target.textContent.split(' - ')[1];
        getCustomerDetailsByEmail(email);
    }
});

// Function to delete a customer by name
function deleteCustomer(firstName, lastName) {
    // Find the index of the customer with the given name
    const index = customers.findIndex(customer => customer.firstName === firstName && customer.lastName === lastName);
    
    if (index !== -1) {
        // If customer is found, remove them from the array
        customers.splice(index, 1);
        // Display the updated customer list
        displayCustomerList();
        alert(`Customer ${firstName} ${lastName} deleted successfully.`);
    } else {
        // If customer is not found, display an error message
        alert('Customer not found!');
    }
}

// Function to fetch all customer email IDs
function fetchEmails() {
    const emails = customers.map(customer => customer.email);
    alert(`Customer Emails:\n${emails.join('\n')}`);
}

// Event listener for the delete customer form submission
document.getElementById('delete-customer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const firstName = document.getElementById('deleteFirstName').value;
    const lastName = document.getElementById('deleteLastName').value;
    
    // Delete customer
    deleteCustomer(firstName, lastName);
    
    // Clear form inputs
    document.getElementById('deleteFirstName').value = '';
    document.getElementById('deleteLastName').value = '';
});

// Event listener for the fetch emails button
document.getElementById('fetch-emails-btn').addEventListener('click', function() {
    // Fetch and display all customer email IDs
    fetchEmails();
});
