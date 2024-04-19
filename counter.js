// Load current visitor count from local storage
let visitorCount = localStorage.getItem('visitorCount');

// Check if visitorCount is null (first time visitor)
if (visitorCount === null) {
    visitorCount = 1;
} else {
    visitorCount = parseInt(visitorCount) + 1;
}

// Update visitor count on the page
document.getElementById('visitorCount').textContent = visitorCount;

// Save updated visitor count to local storage
localStorage.setItem('visitorCount', visitorCount.toString());
