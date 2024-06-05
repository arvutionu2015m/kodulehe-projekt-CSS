document.addEventListener("DOMContentLoaded", () => {
    const changeTextBtn = document.getElementById("changeTextBtn");
    const homeSection = document.getElementById("home");

    if (changeTextBtn) {
        changeTextBtn.addEventListener("click", () => {
            homeSection.querySelector("p").textContent = "Tekst on muudetud JavaScripti abil!";
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            // Saada andmed serverisse või töötle kohapeal (näide)
            console.log("Nimi:", name);
            console.log("Email:", email);
            console.log("Sõnum:", message);

            formMessage.textContent = "Sõnum on saadetud!";
            contactForm.reset();
        });
    }
});
