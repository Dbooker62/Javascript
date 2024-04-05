let contacts = [];

function addme() {
    //  Retrieve the input values
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    //  Create an object and add it to the contacts array
    const contact = {
        firstName,
        lastName,
        email,
        phone
    };
    contacts.push(contact);

    //  Display the latest object
    document.getElementById('json-value').textContent = JSON.stringify(contact, null, 2);

}
