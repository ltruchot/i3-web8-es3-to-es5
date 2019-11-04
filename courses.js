var courses = [
  { ville: 'bruxelles', distances: [10, 13, 9, 23, 21, 5] },
  { ville: 'paris', distances: [8, 18, 19, 11] },
  { ville: 'vientiane', distances: [6, 3, 2, 5] },
];

/* for (var i = 0; i < courses.length; i++) {
  for (var j = 0; j < courses[i].distances.length; j++) {
    total += courses[i].distances[j];
  }
} */

function getTotal(arr) {
  var total = 0;
  for (var course of arr) {
    total += course.distances.reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
  }
  return total;
}

console.log(getTotal(courses));

function getMoyenne(arr, ville) {
  var distances;
  for (var course of arr) {
    if (course.ville === ville) {
      distances = course.distances;
    }
  }
  var total = 0;
  for (var distance of distances) {
    total += distance;
  }
  return total / distances.length;
}
console.log(getMoyenne(courses, 'bruxelles'));


var result = [1, 2, 3].reduce(function (acc, cur) {
  return acc + cur;
}, 0);
console.log(result);
