import { getProfile, getUser, signOutUser } from '../fetch-utils.js';
// import { renderProfile } from '../render-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// make sure we have a user!
const user = getUser();
if (!user) {
    const base =
        location.pathname === '/' || location.pathname === '/solutions-web/user-auth/'
            ? './'
            : '../';
    location.replace(`${base}auth/?redirectUrl=${encodeURIComponent(location)}`);
}

// let error = null;
// let profile = null;



signOutLink.addEventListener('click', signOutUser);

// window.addEventListener('load', async () => {
//     const response = await getProfile(user.id);
//     error = response.error;
//     profile = response.data;

//     if (error) {
//         // eslint-disable-next-line no-console
//         console.log(error);
//         return;
//     }
// });


