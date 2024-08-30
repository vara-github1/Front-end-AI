// JavaScript code to add a new chat when the "New Chat" button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const newChatButton = document.getElementById("new-chat-button");
    const chatList = document.getElementById("chat-list");

    newChatButton.addEventListener("click", function () {
        const chatItem = document.createElement("div");
        chatItem.className = "single-chat";

        const chatIcon = document.createElement("i");
        chatIcon.className = "fas fa-comment chat-icon";
        chatItem.appendChild(chatIcon);

        const chatTitle = document.createElement("span");
        const chatTitleText = prompt("Enter the chat title:"); // Prompt for chat title
        chatTitle.textContent = chatTitleText || "Chat Title";
        chatTitle.className = "chat-title";
        chatItem.appendChild(chatTitle);

        chatList.appendChild(chatItem);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const leftPane = document.getElementById("left-pane");
    const showSidebarButton = document.getElementById("show-sidebar-button");
    const closeSidebarButton = document.getElementById("close-sidebar-button");

    // Function to hide the left pane
    function hideSidebar() {
        leftPane.style.display = "none";
        showSidebarButton.style.display = "block";
    }

    // Function to show the left pane
    function showSidebar() {
        leftPane.style.display = "block";
        showSidebarButton.style.display = "none";
    }

    // Add event listeners to hide and show the sidebar
    closeSidebarButton.addEventListener("click", hideSidebar);
    showSidebarButton.addEventListener("click", showSidebar);
});
