/* =========================
   NEWSLETTER FORM
========================= */

const form = document.getElementById("newsletter-form");
const formMessage = document.getElementById("form-message");

if (form) {

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        if (email === "") {
            formMessage.textContent = "Please enter an email address.";
            return;
        }

        formMessage.textContent =
            "Thank you for subscribing to GreenTech updates!";
    });
}


/* =========================
   PRODUCTS PAGE FILTERING
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const category = button.dataset.category;

            productCards.forEach(card => {

                const cardCategory = card.dataset.category;

                if (category === "all" || cardCategory === category) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
}

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
    });
});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            contactMessage.textContent =
                "Please complete all fields.";

            return;
        }

        contactMessage.textContent =
            "Thank you! Your message has been sent.";

        contactForm.reset();
    });
}