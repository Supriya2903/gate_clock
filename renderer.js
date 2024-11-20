const motivationalQuotes = [
    "Your potential is limitless! Keep pushing forward.",
    "Every challenge is an opportunity to grow stronger.",
    "Believe in yourself and your incredible journey.",
    "Success is built day by day, moment by moment.",
    "Your dreams are valid. Keep working towards them.",
    "Consistency turns ordinary into extraordinary.",
    "You are capable of amazing things. Never give up!"
];

function calculateDaysLeft() {
    const gateExamDate = new Date('2025-02-01'); // GATE 2025 exam date
    const today = new Date();
    const timeDiff = gateExamDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const countdownElement = document.getElementById('countdown');
    const quoteElement = document.getElementById('motivational-quote');
    
    countdownElement.textContent = Math.max(daysLeft, 0);
    
    // Select a random motivational quote
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    quoteElement.textContent = randomQuote;
}

// Update countdown immediately and then every midnight
calculateDaysLeft();
setInterval(() => {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const timeUntilMidnight = midnight.getTime() - new Date().getTime();
    
    setTimeout(() => {
        calculateDaysLeft();
        
        // Set up recurring daily update
        setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);
}, 1000);
