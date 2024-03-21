"use strict";

(function() {
    (async function(){
        const profileData = await fetchProfileData();
        updateProfileInfo(profileData);
        console.log(profileData);
    })();
})();