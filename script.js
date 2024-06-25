function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        description: document.getElementById("description").value
    }
    emailjs.send("service_17ihro8", "template_24b933x", parms).then(
        (response) => {
            alert("Email Sent!");
        },
        (error) => {
            alert("Error:", error);
        },
    );
}