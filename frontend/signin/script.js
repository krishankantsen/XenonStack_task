function submitForm() {


    // Getting form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Creating a data object to send to the server
    const data = {
        email: email,
        password: password
    };

    console.log(data);

    // Sending data to the server using fetch API
    fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        if (json.success) {
            alert(json.message);
            // After successful login, redirect to contact page
            window.location.href = "/contact/contact.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again later.');
    });
}
