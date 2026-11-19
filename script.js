
// Get HTML elements
const password = document.getElementById("password");
const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Update password length
length.addEventListener("input", function() {
    lengthValue.textContent = length.value;
});

// Generate password
function generatePassword() {

    let characters = "";

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    if (characters === "") {
        message.textContent = "Please select at least one option!";
        password.value = "";
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < Number(length.value); i++) {

        const randomIndex = Math.floor(
            Math.random() * characters.length
        );

        generatedPassword += characters[randomIndex];
    }

    password.value = generatedPassword;
    message.textContent = "Password generated successfully!";
}

// Generate button event
generateBtn.addEventListener("click", generatePassword);

// Copy password
copyBtn.addEventListener("click", async function() {

    if (password.value === "") {
        message.textContent = "Generate a password first!";
        return;
    }

    try {
        await navigator.clipboard.writeText(password.value);
        message.textContent = "Password copied successfully!";
    } catch (error) {
        message.textContent = "Unable to copy password.";
    }

});
