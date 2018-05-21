export const userApi = (token) => {
  const request = new Request('https://api.spotify.com/v1/me', {
    headers: new Headers({
      'Authorization': 'Bearer ' + sessionStorage.getItem('x-access-token')
    }),
  });
};