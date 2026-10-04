


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector("button");

    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const formMessage = document.querySelector("#formMessage");

    try {

        const response = await fetch("http://localhost:3000/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })

        });

    
        const data = await response.json();

if (response.ok) {

    formMessage.innerHTML = `
        <div class="alert alert-success">
            ${data.message}
        </div>
    `;

    contactForm.reset();

} else {

    formMessage.innerHTML = `
        <div class="alert alert-danger">
            ${data.message}
        </div>
    `;

}

    } catch (error) {

        formMessage.innerHTML = `
            <div class="alert alert-danger">
                Something went wrong. Please try again.
            </div>
        `;

    }

    submitButton.textContent = "Send Message";
    submitButton.disabled = false;

});