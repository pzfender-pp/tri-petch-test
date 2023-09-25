window.addEventListener("load", () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },
    });

    AOS.init({
        once: true,
        duration: 500,
    });
});
