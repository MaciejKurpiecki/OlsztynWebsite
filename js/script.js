{
    const welcome = () => {
        console.log("Hello there!")
    }

    const onChangeBackgroundClick = () => {
        let dayNight = document.querySelector(".js-dayNight");
        let photo = document.querySelector(".js-landscape");
        let buttonPicture = document.querySelector(".js-button");

        dayNight.classList.toggle("colorNight");
        photo.classList.toggle("header__pictureBannerNight");
        buttonPicture.classList.toggle("header__dayNightButton--moon");
    }
    const init = () => {
        let changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
    };
    welcome();
    init();
}