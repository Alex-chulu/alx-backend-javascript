import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [userResult, photoResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  const formatResult = (result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  });

  return [formatResult(userResult), formatResult(photoResult)];
}

