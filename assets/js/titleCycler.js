var heroCard = document.getElementById("hero-card");
var title = heroCard.querySelector("h1");
var products = [
    "Arwana Silver",
    "Koki Redcap",
    "Ikan Komet",
    "Ikan Koi",
    "Molly Orange",
];
swiper.on("slideChange", function () {
//  title.style.setProperty();
    title.textContent = products[swiper.activeIndex];
//    pointer = pointer < products.length - 1 ? (pointer + 1) : 0;
});
