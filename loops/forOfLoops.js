/*For Of Loops
    -iterate over the values of an iterable object (strings and arrays included)
    -iterable means to be able to parse through with numbers*/

let student = {
    name: 'Jake from state farm',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

/*for(item of student) {
    console.log(item);
}

This does not work because the properties are not 'iterable'*/

let soupArray = ['potato', 'broccoli', 'carrot', 'chicken noodle', 'chili'];

for(soup of soupArray) {
    console.log(soup);
}