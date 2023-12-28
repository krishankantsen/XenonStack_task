function submitForm() {
    // Get form data
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a data object to send to the server
    const data = {
        name: username,
        email: email,
        password: password
    };

    // Send data to the server using fetch API
    fetch("https://admin-omega-steel.vercel.app/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // sending data to backend
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        if (json.success) {
            alert(json.message);
            window.location.href = "/signin/signin.html";
        } else {
            alert("Signup failed: " + json.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}
