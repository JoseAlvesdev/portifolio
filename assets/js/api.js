"use strict";

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/josehenriques10/portifolio/main/data/profile.json';

    const fetching = await fetch(url);

    return await fetching.json();
}