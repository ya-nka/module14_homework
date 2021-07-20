var user = {
  name: 'Ivan',
  age: 30,
};

var str = 'строка';

function fun(user, str) {
  console.log(user.hasOwnProperty('name'));
  console.log(user.hasOwnProperty('age'));
  console.log(user.hasOwnProperty('str'));
}
fun(user);
