async function updateBotStatus() {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/get-stats');  // Fetch the stats including bot status
        const data = await response.json();
        const statusElement = document.querySelector('#bot-status');

        if (data.status === "Online") {
            statusElement.innerText = "Online";
            statusElement.style.color = "green";
        } else {
            statusElement.innerText = "Offline";
            statusElement.style.color = "red";
        }
    } catch (error) {
        console.error('Error fetching bot status:', error);
        const statusElement = document.querySelector('#bot-status');
        statusElement.innerText = "Unknown";
        statusElement.style.color = "gray";
    }
}

// Call updateBotStatus on page load
updateBotStatus();

// Optionally, update the bot status every 30 seconds
setInterval(updateBotStatus, 30000);
