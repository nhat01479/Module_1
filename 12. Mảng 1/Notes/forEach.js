var course = [
    'Javascript',
    'PHP',
    'Ruby'
];

var output = course.forEach(do_something);
function do_something (course, index, array) {
    console.log((course, index, array));
}