document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const inputField = document.querySelector('.ask-somthing input[type="text"]'); // Adjusted to target the input correctly
    const sendButton = document.querySelector('.ask-somthing button[type="submit"]'); // Changed to use the button correctly
    const attachButton = document.querySelector('.ask-somthing button'); // This will be the attach button
    const fileInput = document.getElementById('file-input'); // Ensure this is added in HTML if used
    const evaButton = document.getElementById('eva-btn');
    const card = document.getElementById('eva-card');
    const closeButton = document.getElementById('close-btn');

    // Toggle the card visibility when EVA button is clicked
    evaButton.addEventListener('click', () => {
        card.classList.toggle('show'); // Toggle class for showing/hiding
    });

    // Close the card when the close button is clicked
    closeButton.addEventListener('click', () => {
        card.classList.remove('show');
    });

    // Append the message to the chat box
    const buttons = document.querySelectorAll('.item'); // Adjusted to target action items
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const response = button.textContent;
            appendMessage(response, 'user');
        });
    });

    sendButton.addEventListener('click', () => {
        const userInput = inputField.value.trim();
        if (userInput) {
            appendMessage(userInput, 'user');
            inputField.value = '';
        }
    });

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const userInput = inputField.value.trim();
            if (userInput) {
                appendMessage(userInput, 'user');
                inputField.value = '';
            }
        }
    });

    // Trigger file input when the attach button is clicked
    attachButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            appendMessage(`File attached: ${file.name}`, 'user');
        }
    });

    // Function to append message in the chat
    function appendMessage(message, sender) {
        const messageElement = document.createElement('p');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});
