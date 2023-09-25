window.addEventListener("load", () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    AOS.init({
        once: true,
        duration: 500,
    });
});
