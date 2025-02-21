document.addEventListener("DOMContentLoaded", function () {
    // ✅ Initialize Typed.js
    if (document.querySelector("#element")) {
        var typed = new Typed("#element", {
            strings: ["Web Developer", "Frontend Developer","UI/UX Designer" ,"Tech Enthusiast"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        });
    }

    // ✅ Contact Form Submission
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let formData = new FormData(form);

            fetch("smtp-contact.php", {
                method: "POST",
                body: formData,
            })
            .then(response => response.text())
            .then(data => {
                if (data.trim() === "success") {
                    responseMessage.textContent = "Message sent successfully!";
                    responseMessage.style.color = "green";
                    form.reset();
                } else {
                    responseMessage.textContent = "Error: " + data;
                    responseMessage.style.color = "red";
                }
            })
            .catch(error => {
                responseMessage.textContent = "Something went wrong! Please try again.";
                responseMessage.style.color = "red";
                console.error(error);
            });
        });
    }
});
