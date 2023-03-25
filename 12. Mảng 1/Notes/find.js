
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 10
    },
    {
        id: 2,
        name: 'Java',
        coin: 20
    },
    {
        id: 3,
        name: 'Python',
        coin: 30
    }
];

var course = courses.find(function(courses) {
    if (Array.isArray(courses) == true)
    return courses.name === 'Java';                 
});
document.write(course)
console.log(course)