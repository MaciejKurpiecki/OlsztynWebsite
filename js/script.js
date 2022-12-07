{
    const welcome = () => {
        console.log("Hello there!")
    }

    const onChangeBackgroundClick = () => {
        const dayNight = document.querySelector(".js-dayNight");
        const photo = document.querySelector(".js-landscape");
        const buttonPicture = document.querySelector(".js-button");

        dayNight.classList.toggle("colorNight");
        photo.classList.toggle("header__pictureBannerNight");
        buttonPicture.classList.toggle("header__dayNightButton--moon");
    }
    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
        welcome();
    };
    
    init();
}