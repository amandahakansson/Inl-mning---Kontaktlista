document.getElementById("create-button").addEventListener("click", createContact);
document.getElementById("clear-button").addEventListener("click", clearContacts);

function createContact() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const errorMessage = document.getElementById("error-message");
    
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    
    errorMessage.textContent = ""; 

    if (!validateContact(name, phone)) {
        errorMessage.textContent = "Får ej skapa tom kontakt";
        return;
    }

    const contactItem = document.createElement("li");
    const nameField = createContactField(name);
    const phoneField = createContactField(phone);
    const editButton = createButton("Ändra", () => toggleEdit(nameField, phoneField, editButton));
    const deleteButton = createButton("Radera", () => deleteContact(contactItem));

    contactItem.appendChild(nameField);
    contactItem.appendChild(phoneField);
    contactItem.appendChild(editButton);
    contactItem.appendChild(deleteButton);
    document.getElementById("contacts-container").appendChild(contactItem);

    nameInput.value = "";
    phoneInput.value = "";
}

function createContactField(value) {
    const field = document.createElement("input");
    field.value = value;
    field.disabled = true;
    return field;
}

function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = onClick;
    return button;
}

function toggleEdit(nameField, phoneField, editButton) {
    const isDisabled = nameField.disabled;
    nameField.disabled = !isDisabled;
    phoneField.disabled = !isDisabled;
    editButton.textContent = isDisabled ? "Ändra" : "Ändra";
}

function deleteContact(contactItem) {
    contactItem.remove();
}

function clearContacts() {
    const contactsContainer = document.getElementById("contacts-container");
    contactsContainer.innerHTML = ""; 
}

function validateContact(name, phone) {
    return name.length > 0 && phone.length > 0;
}
