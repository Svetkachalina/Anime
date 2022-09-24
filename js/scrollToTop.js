const scrollToTop = () => {
    const topBtn = document.querySelector('#scrollToTopButton');

topBtn.addEventListener('click', (event) => {
    event.preventDefault
    console.log(event);

    seamless.scrollIntoView(document.querySelector('.header'), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
});
};

scrollToTop();