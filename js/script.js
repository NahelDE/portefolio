document.addEventListener("DOMContentLoaded", () => {
    /* ===== MODAL ===== */
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openContactForm");
    const closeBtn = document.querySelector(".close");

    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    /* ===== EMAILJS ===== */
    emailjs.init("Li-dfHoPOlZtYslrt");

    const form = document.getElementById("contactForm");
    const statusMsg = document.getElementById("contactStatus");

    // Assurer que le message est vide au départ
    statusMsg.textContent = "";
    statusMsg.style.display = "none";

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_h9lxe0e",
            "template_x04lc6c",
            this
        )
            .then(() => {
                statusMsg.style.display = "block";
                statusMsg.style.color = "#2ecc71"; // vert
                statusMsg.textContent = "Message envoyé avec succès !";
                form.reset();

                // Fermer le modal après 2 secondes
                setTimeout(() => {
                    modal.style.display = "none";
                    statusMsg.style.display = "none";
                }, 2000);
            })
            .catch((error) => {
                statusMsg.style.display = "block";
                statusMsg.style.color = "#e74c3c"; // rouge
                statusMsg.textContent = "Erreur lors de l'envoi.";
                console.error(error);
            });
    });

});

// Ouvrir la modale quand on clique sur un projet
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const modalId = card.dataset.modal;
        if(modalId) {
            const modal = document.getElementById(modalId);
            if(modal) modal.style.display = "block";
        }
    });
});


// Fermer la modale
document.querySelectorAll(".close-project").forEach(closeBtn => {
    closeBtn.addEventListener("click", (e) => {
        closeBtn.parentElement.parentElement.style.display = "none";
    });
});

// Fermer quand on clique en dehors
window.addEventListener("click", (e) => {
    document.querySelectorAll(".project-modal").forEach(modal => {
        if(e.target === modal) {
            modal.style.display = "none";
        }
    });
});
