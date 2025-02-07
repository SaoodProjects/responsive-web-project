 // Data of the booking history
 const bookings = [
    {
        city: 'Tokyo',
        country: 'Japan',
        date: '2020/01/12 - 2021/01/17',
        days: '5',
        persons: '2 adults',
        apartment: 'Hotel Yaenomidori',
        cost: '$600'
    },
    {
        city: 'Barcelona',
        country: 'Spain',
        date: '2019/03/06 - 2019/03/10',
        days: '4',
        persons: '1 adult',
        apartment: 'W Barcelona',
        cost: '$350'
    },
    {
        city: 'Florence',
        country: 'Italy',
        date: '2019/05/10 - 2019/05/17',
        days: '7',
        persons: '2 adults',
        apartment: 'Laurus Al Duomo',
        cost: '$400'
    }
];

// to populate the previous booking function
function populateBookingTable() {
    const tableBody = document.getElementById('bookingTable');
    tableBody.innerHTML = '';
    bookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
<td><input type="checkbox"></td>
<td>${booking.city} (${booking.country})</td>
<td>${booking.date}</td>
<td>${booking.days} days</td>
<td>${booking.persons}</td>
<td>${booking.apartment}</td>
<td>${booking.cost}</td>
`;
        tableBody.appendChild(row);
    });
}

// function to sort the booking 
function sortBookings(field) {
    bookings.sort((a, b) => {
        if (field === 'cost') {
            return parseFloat(a[field].replace('$', '')) - parseFloat(b[field].replace('$', ''));
        } else if (field === 'days') {
            return parseInt(a[field]) - parseInt(b[field]);
        } else if (field === 'persons') {
            return a[field].localeCompare(b[field]);
        } else {
            return new Date(a.date.split(' - ')[0]) - new Date(b.date.split(' - ')[0]);
        }
    });
    populateBookingTable();
}

function toggleFilterMenu() {
    document.getElementById('filterOptions').classList.toggle('show');
}

window.onclick = function (event) {
    if (!event.target.matches('.filter-btn')) {
        document.getElementById('filterOptions').classList.remove('show');
    }
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('active');
}

// close profile dropdown when we click on somewhere else 
document.addEventListener('click', function (event) {
    const profileContainer = document.querySelector('.profile-container');
    const dropdown = document.getElementById('profileDropdown');

    if (!profileContainer.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// dash boark initialisation
document.addEventListener('DOMContentLoaded', () => {
    populateBookingTable();
});

// slider code // done by shreyansh
let currentIndex = 0;

function moveSlide(direction) {
    const activitiesSlider = document.getElementById('activitiesSlider');
    const totalSlides = activitiesSlider.children.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 3; // Go to last slide
    } else if (currentIndex >= (totalSlides - 2)) {
        currentIndex = 0; // Go to first slide
    }

    const offset = -currentIndex * (activitiesSlider.children[0].clientWidth + 20); // 20 is the gap between cards
    activitiesSlider.style.transform = `translateX(${offset}px)`;
}

// initial position of page
document.addEventListener('DOMContentLoaded', () => {
    const activitiesSlider = document.getElementById('activitiesSlider');
    activitiesSlider.style.transition = 'transform 0.5s ease';
});

