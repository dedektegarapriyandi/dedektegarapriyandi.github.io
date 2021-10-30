// navbar
const navLinks = document.querySelectorAll(".navbar-link");
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
        if (!link.classList.contains("active")) {
            this.classList.add("border-expand");
        }
    });

    link.addEventListener("mouseleave", function () {
        this.classList.replace("border-expand", "border-collapse");

        setTimeout(() => {
            this.classList.remove("border-collapse");
        }, 200);
    });
});;