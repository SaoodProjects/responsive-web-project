let homePageButton = document.querySelectorAll(".homePage");
homePageButton.forEach((homePage) => {
    homePage.addEventListener(
        "click",
        () => {
            window.open("../Homepage/Home.html", "_self");
        }
    );
}

);

let signInButton = document.querySelector(".sign-in-button");
signInButton.addEventListener(
    "click",
    () => {
        window.open("../LoginPage/Login.html", "_blank");
    }
);

let aboutUs = document.querySelector(".aboutUs");
aboutUs.addEventListener(
    "click",
    () => {
        window.open("../About us + Contact us/AboutUs.html", "_self");
    }
);

let contactUs = document.querySelector(".contactUs");
contactUs.addEventListener(
    "click",
    () => {
        window.open("../About us + Contact us/ContactUs.html", "_self");
    }
);

/* back to top */
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});