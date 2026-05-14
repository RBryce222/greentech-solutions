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

const searchBar = document.getElementById("searchBar");
const productCards = document.querySelectorAll(".product-card");
const filterButtons = document.querySelectorAll(".filter-btn");

if (searchBar) {

    searchBar.addEventListener("keyup", function () {

        const searchValue = searchBar.value.toLowerCase();

        productCards.forEach(card => {

            const productName =
                card.querySelector("h3").textContent.toLowerCase();

            const matchesSearch =
                productName.includes(searchValue);

            const isHiddenByCategory =
                card.classList.contains("hidden-by-category");

            if (matchesSearch && !isHiddenByCategory) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
}


if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", function () {

            const category = button.dataset.category;

            productCards.forEach(card => {

                const matchesCategory =
                    category === "all" ||
                    card.dataset.category === category;

                if (matchesCategory) {

                    card.classList.remove("hidden-by-category");

                    // re-check search filter
                    const searchValue =
                        searchBar ? searchBar.value.toLowerCase() : "";

                    const productName =
                        card.querySelector("h3").textContent.toLowerCase();

                    const matchesSearch =
                        productName.includes(searchValue);

                    if (matchesSearch) {
                        card.classList.remove("hidden");
                    }

                } else {

                    card.classList.add("hidden-by-category");
                    card.classList.add("hidden");
                }
            });
        });
    });
}


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