// redirect to login page
let signin = document.querySelector(".signin");
signin.addEventListener(
    "click",
    () => {
        window.open("../LoginPage/Login.html", "_blank");
    }
);

// navigation buttons
let discoverButton = document.querySelector(".discover");
discoverButton.addEventListener(
    "click",
    () => {
        window.open("../Discover/Discover.html", "_self");
    }
);

let aboutUsButton = document.querySelectorAll(".aboutUs");
aboutUsButton.forEach((it) => {
    it.addEventListener(
        "click",
        () => {
            window.open("../About us + Contact us/AboutUs.html", "_self");
        }
    );
}
);

let supportButton = document.querySelectorAll(".contactUs");
supportButton.forEach((support) => {
    support.addEventListener(
        "click",
        () => {
            window.open("../About us + Contact us/ContactUs.html", "_self");
        }
    );
}
);


// slider
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const destinationGrid = document.querySelector('.destination-grid');
const destinationCards = document.querySelectorAll('.destination-card');

// console.log(document.querySelector("")); 	

const visibleCards = 4;
const totalCards = destinationCards.length;
const totalSets = Math.ceil(totalCards / visibleCards);

// tracks the set of cards
let currentIndex = 0;

function updateSlider() {
    const cardWidth = destinationCards[0].offsetWidth + 20;

    destinationGrid.style.transform = `translateX(-${currentIndex * cardWidth * visibleCards}px)`;

    if (currentIndex === 0) {
        prevBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
    }

    if (currentIndex === totalSets - 1) {
        nextBtn.disabled = true;
    }
    else {
        nextBtn.disabled = false;
    }
}

prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', function () {
    if (currentIndex < totalSets - 1) {
        currentIndex++;
        updateSlider();
    }
});

// initialize slider
updateSlider();


// Ahish popup
document.getElementById('view-deals').addEventListener('click', function () {
    document.getElementById('discount-popup').style.display = 'block';
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('discount-popup').style.display = 'none';
});