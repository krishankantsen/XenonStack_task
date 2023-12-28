function submitForm() {
    // Gettin form data
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const message = document.getElementById('messageInput').value;

    // Creating a data object to send to the server
    const data = {
        name:name,
        email: email,
        phone: phone,
        message:message
    };
    // Sending data to the server using fetch API
    fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => {
        if (json.success) {
           alert("Thank You We will connnect to you soon")
           window.location.href = "/thankyou/thankyou.html";
        }else{
            throw new Error("Error in subbmitting you request")
        }
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
    });
}
