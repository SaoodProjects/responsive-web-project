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

let contactUsButton = document.querySelectorAll(".contactUs");
contactUsButton.forEach((contactUs) => {
    contactUs.addEventListener(
        "click",
        () => {
            window.open("ContactUs.html", "_self");
        }
    );
});