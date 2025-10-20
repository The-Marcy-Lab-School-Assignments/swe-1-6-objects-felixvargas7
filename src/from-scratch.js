const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }

};

/*
{
  name: 'Sara',
  bio: 'Too cool 4 skool.',
  age: 32,
  isCool: true
}
*/

const haveBirthday = (person) => {
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person.spyHandle = spyHandle
};

const carMaker = (name, maker, year) => {
  const newCar = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  }
  return newCar;
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++)
    console.log(`${person.name} likes ${person.hobbies[i]}.`);
};

const getNextOpponent = (team) => {
  if (team.matches.length === 0) {
    return null
  } else {
    return team.matches[0].teamName
  }
};

const listAllKeys = (newObject) => {
  const keysObject = Object.keys(newObject);
  return keysObject;
};

const listAllValues = (newerObject) => {
  const valuesObject = Object.values(newerObject);
  return valuesObject
};

const convertToMatrix = (arrayOfObjects) => {

  if (arrayOfObjects.length === 0) {
    return [];
  }
  const matrix = [];
  const keys = Object.keys(arrayOfObjects[0]);
  matrix.push(keys);
  for (let i = 0; i < arrayOfObjects.length; i++) {
    const obj = arrayOfObjects[i];
    const values = Object.values(obj);
    matrix.push(values);
  }
  return matrix;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
