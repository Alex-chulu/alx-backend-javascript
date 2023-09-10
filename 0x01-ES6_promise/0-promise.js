function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call, e.g., fetching data from an API
    setTimeout(() => {
      const data = { message: 'Data from API' };

      // Resolve the Promise with the fetched data
      resolve(data);

      // Or reject the Promise if an error occurs
      // reject(new Error('API request failed'));
    }, 1000); // Simulate a 1-second delay
  });
}
