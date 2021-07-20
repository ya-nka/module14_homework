//задание 1
const uzer = {
  name: 'Ivan',
  age: 18,
};

for (var prop in uzer) {
  if (uzer.hasOwnProperty(prop)) {
    console.log('свойство (' + prop + '). Значение: ' + uzer[prop]); //  свойство в объекте и значение
  }
}

// только свойство в объекте
const uzer = {
  name: 'Ivan',
  age: 18,
};

for (var prop in uzer) {
  if (uzer.hasOwnProperty(prop)) {
    console.log('свойство (' + prop + ').');
  }
}
