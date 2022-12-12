{
    const welcome = () => {
        console.log("Hello there!")
    }

    const toggleBackground = (button) => {
        const dayNight = document.querySelector(".js-dayNight");
        const photo = document.querySelector(".js-landscape");

        dayNight.classList.toggle("colorNight");
        photo.classList.toggle("header__pictureBannerNight");
        button.classList.toggle("header__dayNightButton--moon");
    }
    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", () => {
            toggleBackground(changeBackgroundButton);
        }
        )
    };
    welcome();
    ;
    init();
}