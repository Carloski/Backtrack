
//Get the values (String) from the Page
// controller function
function getValue() {

    // add invisible class to alert message
    document.getElementById("alert").classList.add("invisible");

    let string = document.getElementById("userString").value;

    let revString = reverseString(string);

    displayString(revString);
}

// Reverse the String
// Logic function
function reverseString(string) {
    let revString = [];
    // reverse the string using for loop

    for (let index = string.length - 1; index >= 0; index--) {
        revString += string[index];
    }
    return revString;
}

// Display the message with reversed string
// View function
function displayString(revString) {

        // Write to the page
        document.getElementById("msg").innerHTML = `<h3 class="fw-bold">${revString}</h3>`;
        // Show the alert box
        document.getElementById("alert").classList.remove("invisible");
}
