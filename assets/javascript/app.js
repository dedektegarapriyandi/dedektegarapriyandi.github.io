// hover function
const navHover = (items) => {
    items.forEach((link) => {
        link.addEventListener("mouseenter", function () {
            if (!link.classList.contains("nav-active")) {
                this.classList.add("border-expand");
            }
        });
        
        link.addEventListener("mouseleave", function () {
            this.classList.replace("border-expand", "border-collapse");
            
            setTimeout(() => {
                this.classList.remove("border-collapse");
            }, 180);
        });
    });
}

navHover(document.querySelectorAll(".navbar-link"));
navHover(document.querySelectorAll(".menu-item"));