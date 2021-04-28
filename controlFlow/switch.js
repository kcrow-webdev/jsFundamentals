/*Switch statements execute a block of code depending on different cases.
    -often used together with a "break" or a "default" keyword (both optional)
        -break: breaks out of the switch block.
        -default: specifies some code to run if there is no case match.*/

let officeCharacter = 'Pam';

switch(officeCharacter) {
    case 'Michael':
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag!");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(officeCharacter);
};

let dessert = "cookies";

switch(dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log("Not on the menu.");
};