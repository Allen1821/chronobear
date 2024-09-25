async function updateStats() {
    try {
        console.log('Attempting to fetch stats...'); // Debugging statement
        const response = await fetch('http://127.0.0.1:5000/api/get-stats');
        console.log('Fetch response:', response); // Debugging statement
        const data = await response.json();
        console.log('Fetched data:', data); // Debugging statement

        document.querySelector('#servers').innerText = data.servers;
        document.querySelector('#users').innerText = data.users;

    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

// Call updateStats on page load
updateStats();

// Optionally, update stats every 30 seconds
setInterval(updateStats, 30000);
