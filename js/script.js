{
    const welcome = () => {
        console.log("Hello there!")
    }
    welcome();
}
{

    const onChangeBackgroundClick = () => {
        dayNight.classList.toggle("colorNight");
        photo.classList.toggle("header__pictureBannerNight");
        changeBackgroundButton.classList.toggle("header__buttonSun");
        changeBackgroundButton.classList.toggle("header__buttonMoon");
    }

    let changeBackgroundButton = document.querySelector(".js-button");
    let dayNight = document.querySelector(".js-dayNight");
    let photo = document.querySelector(".js-landscape");

    changeBackgroundButton.addEventListener("click", onChangeBackgroundClick);
}