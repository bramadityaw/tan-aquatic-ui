var heroCard = document.getElementById("hero-card");
var title = heroCard.querySelector("h1");
var subtitle = heroCard.querySelector("p");
var products = [
    "Arwana Silver",
    "Koki Redcap",
    "Ikan Komet",
    "Ikan Koi",
    "Molly Orange",
];

swiper.on("slideChangeTransitionStart", function () {
    title.classList.add('fade');
});

swiper.on("slideChangeTransitionEnd", function () {
    title.classList.remove('fade');
    title.textContent = products[swiper.activeIndex];
    }
);
