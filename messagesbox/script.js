function saveMessage() {
    // Get the message input element
    var messageInput = document.getElementById("message");
  
    // Get the message text value and trim any leading or trailing whitespace
    var messageText = messageInput.value.trim();
  
    // Check if the message is not empty
    if (messageText !== "") {
      // Get the saved messages from local storage or create an empty array if there are no saved messages
      var savedMessages = localStorage.getItem("savedMessages");
      if (savedMessages) {
        try {
          savedMessages = JSON.parse(savedMessages);
        } catch (e) {
          savedMessages = [];
        }
      } else {
        savedMessages = [];
      }
  
      // Add the new message to the saved messages array
      savedMessages.push(messageText);
  
      // Save the updated saved messages array to local storage
      localStorage.setItem("savedMessages", JSON.stringify(savedMessages));
  
      // Display the message saved confirmation message
      var savedMessageElement = document.getElementById("saved-message");
      savedMessageElement.textContent = "Message saved";
  
      // Clear the message input field
      messageInput.value = "";
    }
  }
    
  function loadMessages() {
    // Get the saved messages from local storage or create an empty array if there are no saved messages
    var savedMessages = JSON.parse(localStorage.getItem("savedMessages")) || [];
  
    // Create a string to hold the HTML for the list of messages
    var messageListHTML = "";
  
    // Loop through the saved messages and add each one to the message list HTML string
    for (var i = 0; i < savedMessages.length; i++) {
      messageListHTML += "<div class='message'>" + savedMessages[i] + "</div>";
    }
  
    // Display the message list HTML in the message list div
    var messageList = document.getElementById("message-list");
    messageList.innerHTML = messageListHTML;
  }
    