{
    const welcome = () => {
        console.log("Hello there!")
    };


    const onChangeBackgroundClick = () => {
        dayNight.classList.toggle("colorNight");
        photo.classList.toggle("header__pictureBannerNight");
        changeBackgroundButton.classList.toggle("header__buttonSun");
        changeBackgroundButton.classList.toggle("header__buttonMoon");
    };

    const init = () => {
        let changeBackgroundButton = document.querySelector(".js-button");
        let dayNight = document.querySelector(".js-dayNight");
        let photo = document.querySelector(".js-landscape");

        changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
        welcome();
    };
    init();
};
