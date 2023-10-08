// Program JS menggunakan if else 
// Hour
// if hour is between 6am and 12pm: Good morning
// if it is between 12pm and 6pm: Good afternoon
// otherwise: Good evening

let hour=10;

 if (hour >= 6 && hour < 12) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
 else 
   console.log('Good evening');



// Program JS menggunakan nested if

let x = 9;

if (x === 0) {
    console.log("Neither positive nor negative!");
} else if (x > 0) {
    if (x < 10) {
        console.log("Single-digit positive number!");
    } else {
        console.log("More than one-digit positive number!");
    }
} else {
    console.log("Negative number!");
}


// Program JS menggunakan Switch case

let a= 2;
 
switch (a) {
    case 0:
        console.log("a is zero.");
        break;
    case 1:
        console.log("a is one.");
        break;
    case 2:
        console.log("a is two.");
        break;
    default:
        console.log("a is greater than 2.");
}

// Program JS menggunakan for statement


const n = 5;
// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log('I LOVE MYSELF');
}

// Program JS menggunakan while

let i  =  1;

while (i < 10) {
    console.log('data i to -', i);
    i++
}

// Program JS menggunakan  do while
let y = 10 
do {
    console.log ('data y to -',y)
    y++
} while (y <= 5)



// Program JS menggunakan  Fungtion
function hello(name) {
    console.log("hello " + name)
    console.log("how are you")
}
hello("Nes")