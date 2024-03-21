"use strict";

function updateProfileInfo(profileData) {
    const photo = document.querySelector('.js-profile-photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.querySelector('.js-profile-name');
    name.innerText = profileData.name;
    name.style.fontWeight = '700';

    const job = document.querySelector('.js-profile-job');
    job.innerText = profileData.job;

    const location = document.querySelector('.js-profile-location');
    location.innerText = profileData.location;

    const phone = document.querySelector('.js-profile-phone');
    phone.href = `tel: ${profileData.phone}`;
    phone.innerText = profileData.phone;

    const email = document.querySelector('.js-profile-email');
    email.href = `mailto:${profileData.email}`;
    email.innerText = profileData.email;
}

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/josehenriques10/portifolio/main/data/profile.json';

    const fetching = await fetch(url);

    return await fetching.json();
}