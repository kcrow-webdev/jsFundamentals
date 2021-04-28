let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary!');
};

let myName = 'Rick James';

if(myName == 'Rick James') {
    console.log(myName);
} else {
    console.log('Hello, what is your name?');
};

if(myName == 'Rick James') {
    console.log('Hello, my name is ' + myName);
} else {
    console.log('Hello, is your name ' + myName + '?');
};

//Else if

let newName = 'Eric';

if(newName == "Waldo") {
    console.log('Hello ' + newName);
} else if (newName === 'Eric') {
    console.log('Hello ' + newName);
} else {
    console.log("I don't know " + newName + ".");
};

let age = 30;

if(age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age > 25) {
    console.log("You can rent a car!");
} else if (age > 20) {
    console.log("You can drink!");
} else if (age > 17) {
    console.log("You can vote!");
};