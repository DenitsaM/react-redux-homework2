const serviceUrl = "https://rickandmortyapi.com/api/character";
const searchUrl = (searchable) => `${serviceUrl}/?name=${searchable}`;
const specificCharacter = `${serviceUrl}/:id`;

export function getCharacter() {
  const characterPromise = new Promise((resolve, reject) => {
    return fetch(serviceUrl)
      .then(res => res.json())
      .then(characters => resolve(characters))
      .catch(error => reject(error));
  });

  
  return characterPromise;
}

export function searchCharacter(character) {
  const searchCharacterPromise = new Promise((resolve, reject) => {
    return fetch(searchUrl(character))
      .then(res => res.json())
      .then(characters => resolve(characters.results))
      .catch(error => reject(error));
  });

  return searchCharacterPromise;
}
export function getSpecificCharacter(id) {
  const characterPromise = new Promise((resolve, reject) => {
    return fetch(specificCharacter)
      .then(res => res.json())
      .then(characters => resolve(characters))
      .catch(error => reject(error));
  });

  return getSpecificCharacter;
}