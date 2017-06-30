

const API_ROOT = 'http://localhost:3000/';

function callApi(path) {
  const fullUrl = API_ROOT + path;

  return fetch(fullUrl)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return Object.assign(
        {},
        json
      );
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}

// api services
export default {
  fetchLayout: params => callApi('/api/layout.json'),
  fetchMarket: params => callApi('/api/markets.json'),
};
