// utils.js
import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // Create a user
  const userPromise = createUser('Guillaume', 'Salva');

  // Upload a photo
  const photoPromise = uploadPhoto('photo-profile-1');

  // Use Promise.all to resolve all promises
  Promise.all([userPromise, photoPromise])
    .then(([user, photo]) => {
      console.log(`${photo} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

