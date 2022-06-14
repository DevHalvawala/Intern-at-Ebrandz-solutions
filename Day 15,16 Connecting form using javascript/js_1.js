function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "devhalvawala15@gmail.com",
        Password: "dev#1502",
        To: "dh150202xyz@gmail.com",
        From: document.getElementById("email").value,
        Subject: "Contact Form",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone no.: " + document.getElementById("phone").value +
            "<br> Message No.: " + document.getElementById("message").value
    }).then(
        message => alert("Message sent succesfully")
    );
}