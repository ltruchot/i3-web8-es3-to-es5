/*
function setColor(color) {
  document.body.style.backgroundColor = color;
  window.localStorage.setItem('userColor', color);
}


if (!localStorage.getItem('userColor')) {
  setColor(window.prompt('What is your favorite color?'));
} else {
  document.body.style.backgroundColor = localStorage.getItem('userColor');
}


var btns = document.getElementsByTagName('button');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    setColor(e.target.innerText);
  });
}
*/


// document.body.innerText = localStorage.getItem('nom');
// localStorage.setItem('nom', 'Marcel');

/* var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  arr[i] *= 2;
}

var arr2 = [];
for (var el of arr) {
  console.log(el);
  arr2.push(el);
} */
/*
var obj = { toto: 2, titi: 'toto' };
for (var key in obj) {
  obj[key] = obj[key] + 'coucou';
}
console.log(obj);
*/
/*
var arr = ['gateau', 'gateau'];
var arr2 = arr.map(function (el) {
  return el + ' avec cerise';
});
console.log(arr2);
*/
/*
var a = 2;


var toto = function () {
  return a * 2;
};

console.log(toto());
*/

/*
console.log(obj);
var toto = JSON.stringify(obj);
console.log(toto);
var titi = JSON.parse(toto);
console.log(titi);
*/
/* function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
var tutu = obj;
tutu.age = 54;
 */
var obj = { name: 'loic', age: 34 };
obj.madness = obj;
console.log(JSON.stringify(obj));
