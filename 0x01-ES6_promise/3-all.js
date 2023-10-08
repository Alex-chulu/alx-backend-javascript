import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then(({ result }) => {
      createUser()
        .then(({ firstName, lastName }) => {
          console.log(`${result} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
