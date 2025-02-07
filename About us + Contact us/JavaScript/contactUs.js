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

let aboutUsButton = document.querySelectorAll(".aboutUs");
aboutUsButton.forEach((aboutUs) => {
    aboutUs.addEventListener(
        "click",
        () => {
            window.open("AboutUs.html", "_self");
        }
    );
});



// Form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const isValid = validateForm();

        if (isValid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    function clearErrors() {
        document.getElementById('fnameError').textContent = '';
        document.getElementById('lnameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('messageError').textContent = '';
    }

    function validateForm() {
        let valid = true;

        const fname = document.getElementById('fname').value.trim();
        const lname = document.getElementById('lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!fname) {
            document.getElementById('fnameError').textContent = "First Name is required";
            valid = false;
        }

        if (!lname) {
            document.getElementById('lnameError').textContent = "Last Name is required";
            valid = false;
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById('emailError').textContent = "Invalid email format";
            valid = false;
        }

        if (!phone || !/^\d{10,15}$/.test(phone)) {
            document.getElementById('phoneError').textContent = "Invalid phone number";
            valid = false;
        }

        if (!message) {
            document.getElementById('messageError').textContent = "Message cannot be empty";
            valid = false;
        }

        return valid;
    }
});


// form reset button
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const resetButton = document.getElementById("resetForm");

    resetButton.addEventListener("click", function () {
        form.reset();
        clearErrors();
    });

    function clearErrors() {
        document.getElementById('fnameError').textContent = '';
        document.getElementById('lnameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('messageError').textContent = '';
    }
});