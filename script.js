// Get the button element by its ID and assert the type
var button = document.getElementById('changeTextBtn');
// Variable to track the current position state
var isTranslated = false;
if (button) {
    // Add an event listener for the button click
    button.addEventListener('mouseenter', function () {
        if (!isTranslated) {
            button.style.transform = 'translate(200px, 200px)'; // Move the button down and right
            isTranslated = true; // Set the state to true
        }
        else {
            button.style.transform = 'translate(0, 0)'; // Reset the button position
            isTranslated = false; // Set the state back to false
        }
    });
}
