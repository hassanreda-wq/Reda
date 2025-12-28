// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded successfully.");

    // Simple functionality to highlight the active page in navbar 
    // (Alternative to hardcoding class="active" in HTML)
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    const menuLength = menuItems.length;
    
    // Example: Form validation enhancement
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            if (name.length < 3) {
                alert("Name must be at least 3 characters long.");
                event.preventDefault(); // Stop form submission
            }
        });
    }
});