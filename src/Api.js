const URL = 'https://api.github.com/users';

function getDataUser (user) {
  return fetch(`${URL}/${user}`)
    .then(res => res.json())
    .catch(error => console.error(error))
}

export default {getDataUser}