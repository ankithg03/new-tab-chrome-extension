const data = {
    "name": "Ankith G",
    "backgroundImage": "assets/images/1.png",
    "discountImage": "assets/images/naruto.jpeg",
    "profileImage": "/src/assets/images/me.jpg",
    "headerLinks": [
        {
            "title": "Home",
            "link": "#",
            "active": true,
        },
        {
            "title": "Namely",
            "link": "https://corra.namely.com/",
        },
        {
            "title": "Google",
            "link": "https://google.com/",
        },
        {
            "title": "Drive",
            "link": "https://drive.google.com/",
        }
        // Add more header links as needed
    ],
    "destinations": [
        {
            "address": "363 Bloomfield Avenue, 3rd Floor, Suite C Montclair, NJ, 07042",
            "distance": "42.8m"
        },
        {
            "address": "340 Madison Ave, 3rd floor suite a, New York, NY 10173",
            "distance": "42.8m"
        }
        // Add more destinations as needed
    ]
}
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const strTime = hours + '.' + minutes + ' ' + ampm;
    return strTime;
 }

 // Update the time in the HTML element with the class 'hour'
const time = getCurrentTime();
document.querySelector('.hour').textContent = time;
document.querySelector('.cal-hour').textContent = time;
setInterval(()=>{
    const time = getCurrentTime();
    document.querySelector('.hour').textContent = time;
    document.querySelector('.cal-hour').textContent = time;
}, 1000)


function generateCalendar() {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Update the month and year in the header
    document.querySelector('.cal-title').textContent = `${now.toLocaleString('default', { month: 'long' })}, ${year}`;

    // Clear the current calendar days
    const daysContainer = document.querySelector('.items.days');
    daysContainer.innerHTML = '';

    // Add the days of the week
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('item');
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
    });

    // Add the calendar days
    const numbersContainer = document.querySelector('.items.numbers');
    numbersContainer.innerHTML = '';

    // Add empty days for the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDayElement = document.createElement('div');
        emptyDayElement.classList.add('item', 'disable');
        numbersContainer.appendChild(emptyDayElement);
    }

    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('item');
        dayElement.textContent = i;
        if (i === now.getDate()) {
            dayElement.classList.add('is-active');
        }
        numbersContainer.appendChild(dayElement);
    }
}

// Call the function to generate the calendar
generateCalendar();


document.querySelectorAll('.user-name').forEach(ele =>{
    ele.textContent = data.name;
})

// Update the user address

// Update the background image
document.getElementById('background-image').style.backgroundImage = `url(${data.backgroundImage})`;
document.querySelector('.c-profile').src = data.profileImage;

// Update the destination cards
const destinationCards = document.getElementById('destination-cards');
data.destinations.forEach(destination => {
    const destinationCard = document.createElement('div');
    destinationCard.classList.add('destination-card');

    const destinationProfile = document.createElement('div');
    destinationProfile.classList.add('destination-profile');

    const destinationLength = document.createElement('div');
    destinationLength.classList.add('destination-length');
    destinationLength.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
        ${destination.distance}
    `;

    const destinationPoints = document.createElement('div');
    destinationPoints.classList.add('destination-points');
    destinationPoints.innerHTML = `
        <div class="point">${destination.address}</div>
    `;

    destinationProfile.appendChild(destinationLength);
    destinationProfile.appendChild(destinationPoints);
    destinationCard.appendChild(destinationProfile);
    destinationCards.appendChild(destinationCard);
});
document.getElementById('discount-img').src = data.discountImage;
const headerLinksContainer = document.querySelector('.header-links');
            data?.headerLinks?.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.classList.add('header-link');
                if (link.active) {
                    linkElement.classList.add('active');
                }
                linkElement.href = link.link;
                linkElement.textContent = link.title;
                headerLinksContainer?.appendChild(linkElement);
            });
console.log('aaa', document.getElementById('user-address'))