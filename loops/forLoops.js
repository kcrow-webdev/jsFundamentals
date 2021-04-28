/*Loops
    -offer us a quick and easy way to do something repeatedly, or loop over something
    -A loop has 3 parts
        -Initial expression
        -Condition
        -Increment expression*/

for (let i=0; i<10; i++) {
    console.log(i);
}

for (let i=0; i<=20; i+=2) {
    console.log(i);
}

for (let i=10; i>=0; i--) {
    console.log(i);
}

for (let i=0; i>=-24; i-=2) {
    console.log(i);
}

let myName = "Isaiah";

for (let i=0; i<myName.length; i++) {
    console.log(myName[i]);
}

let sum=0;
for (let i=1; i<51; i++) {
    sum += i;
}
console.log(sum);