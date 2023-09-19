function handleResponseFromAPI(promise) {
  return promise
    .then((result) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error('Got an error from the API');
      return new Error();
    });
}

// Example usage:
const apiPromise = new Promise((resolve, reject) => {
  // Simulate resolving the promise
  // resolve('Some data');
  
  // Simulate rejecting the promise
  // reject('An error occurred');
});

handleResponseFromAPI(apiPromise)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

