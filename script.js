// Scroll Reveal Animation

Const sections = document.querySelectorAll("section");

Window.addEventListener("scroll", function () {

    Sections.forEach(function (section) {

        Const windowHeight = window.innerHeight;
        Const sectionTop = section.getBoundingClientRect().top;

        If (sectionTop < windowHeight – 100) {
            Section.classList.add("active");
        }

    });

});

