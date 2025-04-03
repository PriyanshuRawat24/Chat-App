document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendBtn = document.getElementById("send-btn");
    
    sendBtn.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (!messageText) return;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");
        messageDiv.textContent = messageText;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = "";

        setTimeout(() => receiveMessage(), 1000);
    }

    function receiveMessage() {
        const responses = [
            "Hello! 😊", "Hello Dear", "I'm Fine!🌟", "How are you?",
            "Good Morning", "Good Evening", "Good Afternoon",
            "I'm sorry, I didn't understand that.", "I'm not sure what you mean.",
            "I'm not sure how to respond to that.", "I'm sorry, I'm not sure how to respond to that.",
            "I'm sorry, I'm not sure how to respond to that.", "I'm sorry, I'm not sure how to respond to that.",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "received");
        messageDiv.textContent = randomResponse;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});