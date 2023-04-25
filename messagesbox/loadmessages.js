// Get the message table element
var messageTable = document.getElementById("message-table");

// Get the saved messages from local storage or create an empty array if there are no saved messages
var savedMessages = JSON.parse(localStorage.getItem("savedMessages")) || [];

// Loop through the saved messages array and create a new row for each message in the table
for (var i = 0; i < savedMessages.length; i++) {
  var message = savedMessages[i];
  var date = new Date().toLocaleString();
  var row = "<tr><td>" + message + "</td><td>" + date + "</td></tr>";
  messageTable.innerHTML += row;
}
function loadMessages() {
    // Get the saved messages from local storage or create an empty array if there are no saved messages
    var savedMessages = JSON.parse(localStorage.getItem("savedMessages")) || [];
  
    // Get the message list element
    var messageList = document.getElementById("message-list");
  
    // Create a table to display the messages
    var table = document.createElement("table");
  
    // Create a header row for the table
    var headerRow = document.createElement("tr");
    var messageHeader = document.createElement("th");
    var dateHeader = document.createElement("th");
    messageHeader.textContent = "Message";
    dateHeader.textContent = "Date";
    headerRow.appendChild(messageHeader);
    headerRow.appendChild(dateHeader);
    table.appendChild(headerRow);
  
    // Loop through the saved messages and create a row for each message in the table
    for (var i = 0; i < savedMessages.length; i++) {
      var message = savedMessages[i].message;
      var date = savedMessages[i].date;
  
      var row = document.createElement("tr");
      var messageCell = document.createElement("td");
      var dateCell = document.createElement("td");
      messageCell.textContent = message;
      dateCell.textContent = date;
      row.appendChild(messageCell);
      row.appendChild(dateCell);
      table.appendChild(row);
    }
  
    // Clear any previous messages from the message list element and add the table to the page
    messageList.innerHTML = "";
    messageList.appendChild(table);
  }