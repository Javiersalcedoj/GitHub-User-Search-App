export const URL = process.env.VUE_APP_API;

function getDataUser(user) {
  return fetch(`${URL}/${user}`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
}

export default { getDataUser };