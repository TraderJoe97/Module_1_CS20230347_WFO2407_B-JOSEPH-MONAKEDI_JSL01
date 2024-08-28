function validateSyntax() {
    let input = document.getElementById("petInput").value;
    const regex = /^pet_\d{4}[A-Za-z]+$/ // Validation logic goes here
    let result = ""; // Placeholder for validation result

        // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (regex.test(input)) {
        result = "valid Syntax"
    } else {
        result = "Invalid Syntax"
    }
            document.getElementById("result").innerText = result;
}


