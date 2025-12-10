document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------
    // 1. Hero Text Fade-In Animation
    // -----------------------------------
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('fade-in');
    }

    // -----------------------------------
    // 2. Smooth Scrolling For Anchor Links
    // -----------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // -----------------------------------
    // 3. Read More Buttons
    // -----------------------------------
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.artist-card-wide');
            const bio = card.querySelector('.bio-preview');
            const isExpanded = bio.classList.toggle('expanded');
            button.textContent = isExpanded ? 'Read Less' : 'Read More';
            button.setAttribute('aria-expanded', isExpanded);
            
            // If expanding, scroll the card into view
            if (isExpanded) {
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });

    // -----------------------------------
    // 4. Scroll to hash if present
    // -----------------------------------
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 200); // wait for the page to render fully
        }
    }

    document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------
    // 1. Ticket Form Validation
    // -----------------------------------
    const form = document.getElementById("ticketForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // prevent page refresh

            let valid = true;

            // Clear previous messages
            document.querySelectorAll(".error").forEach(el => el.textContent = "");
            document.getElementById("successMessage").textContent = "";

            const fullName = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const numTickets = parseInt(document.getElementById("quantity").value, 10);
            const ticketType = document.getElementById("ticket-type").value;
            const paymentMethod = document.getElementById("payment").value;
            const terms = document.getElementById("terms").checked;

            // Full Name
            if (fullName === "") {
                document.getElementById("nameError").textContent = "Full Name is required.";
                valid = false;
            }

            // Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                document.getElementById("emailError").textContent = "Email is required.";
                valid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Enter a valid email address.";
                valid = false;
            }

            // Phone
            const phonePattern = /^[0-9]{10,15}$/;
            if (phone === "") {
                document.getElementById("phoneError").textContent = "Phone number is required.";
                valid = false;
            } else if (!phonePattern.test(phone)) {
                document.getElementById("phoneError").textContent = "Enter a valid phone number (10–15 digits).";
                valid = false;
            }

            // Number of Tickets
            if (isNaN(numTickets) || numTickets < 1 || numTickets > 10) {
                document.getElementById("ticketsError").textContent = "You must choose between 1 and 10 tickets.";
                valid = false;
            }

            // Ticket Type
            if (ticketType === "") {
                document.getElementById("typeError").textContent = "Select a ticket type.";
                valid = false;
            }

            // Payment Method
            if (paymentMethod === "") {
                document.getElementById("paymentError").textContent = "Select a payment method.";
                valid = false;
            }

            // Terms
            if (!terms) {
                document.getElementById("termsError").textContent = "You must agree to the Terms & Conditions.";
                valid = false;
            }

            // Success
            if (valid) {
                document.getElementById("successMessage").textContent =
                    "Success! Your booking details have been validated.";
                form.reset();
            }
            // Terms
if (!terms) {
    document.getElementById("termsError").textContent = "You must agree to the Terms & Conditions.";
    valid = false;
}
        });
    }
    const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, ""); // remove non-digits
});
});

});