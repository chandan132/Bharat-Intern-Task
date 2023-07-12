document.getElementById("createButton").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const meetingCode = generateMeetingCode();

  // You can store the name, email, and meeting code in your database here
  // For this example, we'll just display the meeting code on the screen
  document.getElementById("meetingCode").textContent = meetingCode;
  document.querySelector(".input-section").style.display = "none";
  document.querySelector(".meeting-code-section").style.display = "block";
});

document.getElementById("shareButton").addEventListener("click", function () {
  // Implement the logic to share the meeting code here
  alert("Share button clicked!");
});

document.getElementById("copyButton").addEventListener("click", function () {
  // Implement the logic to copy the meeting code to clipboard here
  alert("Copy button clicked!");
});

function generateMeetingCode() {
  const length = 6;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

// Rest of the JavaScript code remains the same
function redirectToWebPage() {
  window.location.href = "web-page.html";
}
// Function to handle the "Participants" button click
document
  .getElementById("participantsButton")
  .addEventListener("click", function () {
    const participantsSection = document.getElementById("participantsSection");
    participantsSection.classList.toggle("hidden");
  });

// Function to handle the "Chat" button click
document.getElementById("chatButton").addEventListener("click", function () {
  const chatSection = document.getElementById("chatSection");
  chatSection.classList.toggle("hidden");
});

// Function to handle the "Send" button click
document.getElementById("sendButton").addEventListener("click", function () {
  const chatInput = document.getElementById("chatInput");
  const message = chatInput.value;

  if (message.trim() !== "") {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.textContent = `You: ${message}`;

    // Simulate receiving the message back
    setTimeout(() => {
      chatWindow.textContent += `\nApeksha: ${message}`;
    }, 1000);

    chatInput.value = "";
  }
});
// script.js

// Function to send the selected emoji
function sendEmoji(emoji) {
  // You can modify this function to handle sending the emoji
  // For now, let's just log the selected emoji to the console
  console.log("Selected emoji:", emoji);

  // You can use this selected emoji and implement logic to send it to the chat or any other feature.
}

// Function to close the emoji popup
function closeEmojiPopup() {
  var emojiPopup = document.getElementById("emojiPopup");
  emojiPopup.style.display = "none";
}

// Function to show the emoji popup
document.getElementById("emojiButton").addEventListener("click", function () {
  var emojiPopup = document.getElementById("emojiPopup");
  emojiPopup.style.display = "block";
});
