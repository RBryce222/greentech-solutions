/* NEWSLETTER */

const form = document.getElementById("newsletter-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    if(email === "") {
        message.textContent = "Please enter an email address.";
        return;
    }

    message.textContent =
        "Thank you for subscribing to GreenTech updates!";
});

const searchBar = document.getElementById("searchBar");

const productCards =
    document.querySelectorAll(".product-card");

const filterButtons =
    document.querySelectorAll(".filter-btn");

/* SEARCH FILTER */

searchBar.addEventListener("keyup", function() {

    const searchValue =
        searchBar.value.toLowerCase();

    productCards.forEach(card => {

        const productName =
            card.querySelector("h3")
                .textContent
                .toLowerCase();

        if(productName.includes(searchValue)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
});

/* CATEGORY FILTER */

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        const category =
            button.dataset.category;

        productCards.forEach(card => {

            if(category === "all") {
                card.style.display = "block";
            }
            else if(card.dataset.category === category) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });
    });
});

/* CONTACT */
const contactForm =
    document.getElementById("contactForm");

const contactMessage =
    document.getElementById("contactMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("contactEmail")
            .value
            .trim();

    const message =
        document.getElementById("message")
            .value
            .trim();

    if(name === "" || email === "" || message === "") {

        contactMessage.textContent =
            "Please complete all fields.";

        return;
    }

    contactMessage.textContent =
        "Thank you! Your message has been sent.";

    contactForm.reset();
});