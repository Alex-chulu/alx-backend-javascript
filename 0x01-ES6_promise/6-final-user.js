import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [userPromise, photoPromise] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return [
    {
      status: userPromise.status,
      value: userPromise.status === 'fulfilled' ? userPromise.value : userPromise.reason,
    },
    {
      status: photoPromise.status,
      value: photoPromise.status === 'fulfilled' ? photoPromise.value : photoPromise.reason,
    },
  ];
}

