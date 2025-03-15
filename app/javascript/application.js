// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            let content = this.parentElement.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
                this.textContent = "x";
            } else {
                content.style.display = "none";
                this.textContent = "+";
            }
        });
    });
});