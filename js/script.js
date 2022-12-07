function welcome(){
    console.log("Hello there!")
}
welcome();

let changeBackgroundButton = document.querySelector(".js-button");
let dayNight = document.querySelector(".js-dayNight");
let photo = document.querySelector(".js-landscape");

changeBackgroundButton.addEventListener("click", () => {
    dayNight.classList.toggle("colorNight");

    if (dayNight.classList.contains("colorNight")) {
        photo.classList.add("header__pictureBannerNight");
        changeBackgroundButton.classList.remove("header__buttonSun");
        changeBackgroundButton.classList.add("header__buttonMoon");
    }
    else {
        photo.classList.remove("header__pictureBannerNight");
        changeBackgroundButton.classList.add("header__buttonSun");
        changeBackgroundButton.classList.remove("header__buttonMoon");
    }
});