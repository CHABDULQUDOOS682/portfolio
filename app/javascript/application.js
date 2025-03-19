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

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    function showSlide(index) {
        slides?.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    showSlide(slideIndex);

    nextBtn?.addEventListener("click", nextSlide);
    prevBtn?.addEventListener("click", prevSlide);
})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.hero__cta a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionID = this.getAttribute('data-target');
            const section = document.getElementById(sectionID);

            if (section) {
                section.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });
})
