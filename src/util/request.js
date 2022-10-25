// A helper function for making requests to Wikipedia's Pageview API
export function request(method, url) {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
    .then((res) => {
      if (res.status >= 300 || res.status < 200) {
        console.error(
          'Failed to find page stats matching the specified parameters'
        );
      } else {
        return res.json();
      }
    })
    .then((data) => {
      return data.items[0];
    });
}
