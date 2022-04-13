document.addEventListener('DOMContentLoaded', function() {

    // After page has loaded, run a fuction to add text-resizing functionality to buttons
    fontSizeButtons();
});


function fontSizeButtons() {

    // Identify the text-resizing buttons
    const buttons = document.querySelectorAll('.font-size');

    // For each button, add an on-click function based on its properties
    buttons.forEach(button => {

        // Set the target body text size to the font size set for that button
        const buttonStyle = window.getComputedStyle(button);
        const targetSize = buttonStyle.getPropertyValue('font-size');

        // When that button's clicked, run a function to change the body text to the target size
        button.addEventListener('click', () => changeBodyFont(targetSize));
    });
};


function changeBodyFont(targetSize) {

    // Detect the size of body and heading text before making any changes
    const root = document.querySelector(':root');
    const oldBodyText = window.getComputedStyle(root).getPropertyValue('--bodyText').trim();
    const oldHeadingText = window.getComputedStyle(root).getPropertyValue('--headingText').trim();

    // Compute how the body size is being changed
    const oldBodyValue = parseInt(oldBodyText);
    const newBodyValue = parseInt(targetSize);
    const changeInBody = newBodyValue - oldBodyValue;

    // Change the heading by the same amount as the body was
    const oldHeadingValue = parseInt(oldHeadingText);
    const newHeadingValue = oldHeadingValue + changeInBody + "px";

    // Change the body text to the target size and the heading text by the same amount
    root.style.setProperty('--bodyText', targetSize);
    root.style.setProperty('--headingText', newHeadingValue);
};
