"use strict";

(function() {
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

    function updateSoftSkills(profileData) {
        const softskills = document.querySelector('.js-profile-softskills');
        
        softskills.innerHTML = profileData.skills.softSkills.map(
            skill => `<li class="c-personal-list__item">${skill}</li>`
        ).join('');
    }

    function upadateLanguages(profileData) {
        const languages = document.querySelector('.js-profile-languages');

        languages.innerHTML = profileData.languages.map(language => {
            return `<li class="c-languages_item c-languages_item--before">
                ${language}
            </li>`;
        }).join('');
    }

    function updatePortifolio(profileData) {
        const portifolio = document.querySelector('.js-profile-portifolio');

        portifolio.innerHTML = profileData.portfolio.map(project => {
            const projectTitle = document.querySelectorAll('.c-project__title');

            return `
                <li class="c-project">
                    <span class="c-project__title ${project.github ? 'c-project__title--before': ''}">
                        ${project.name}
                    </span>
                    <a 
                        class="c-project__link c-project__link--hover" 
                        href="${project.url}"
                        target="_blank"
                        rel="external"
                    >
                        ${project.url}
                    </a>
                </li>
            `
        }).join('');
    }

    (async function() {
        const profileData = await fetchProfileData();

        updateProfileInfo(profileData);
        updateSoftSkills(profileData);
        upadateLanguages(profileData);
        updatePortifolio(profileData);
    })();
})();