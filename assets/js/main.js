"use strict";

(function() {
    (async function(){
        const profileData = await fetchProfileData();
        console.log(profileData);
    })();
})();