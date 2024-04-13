
//question2
let personName: string = "Muhammad Ahmed Raza";
let message: string = `Hello ${personName}, would you like to learn some Python today?`;

console.log(message);



//question3
let personName2: string = "Zoha";

// Converting to lowercase
let lowercaseName: string = personName2.toLowerCase();
console.log("Lowercase:", lowercaseName);

// Converting to uppercase
let uppercaseName: string = personName2.toUpperCase();
console.log("Uppercase:", uppercaseName);

// Converting to title case
let titlecaseName: string = personName2.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
console.log("Titlecase:", titlecaseName);



//question4
let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);



//question5
let famous_person: string = "Albert Einstein";
let quote2: string = "A person who never made a mistake never tried anything new.";

let message2: string = `${famous_person} once said, "${quote}"`;
console.log(message);



//question6
let personNameWithWhitespace: string = "\t\n   John Doe   \t\n";

// Printing name with whitespace
console.log("Name with Whitespace:", personNameWithWhitespace);

// Stripping the whitespaces and printing the name
let strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped Name:", strippedName);


//question7
// Addition
let additionResult: number = 5 + 3;
console.log("Addition:", additionResult);

// Subtraction
let subtractionResult: number = 10 - 2;
console.log("Subtraction:", subtractionResult);

// Multiplication
let multiplicationResult: number = 4 * 2;
console.log("Multiplication:", multiplicationResult);

// Division
let divisionResult: number = 16 / 2;
console.log("Division:", divisionResult);


//question8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);



//question9
let favoriteNumber: number = 42;
let favoriteNumberMessage: string = `My favorite number is ${favoriteNumber}.`;
console.log(favoriteNumberMessage);



//question10

//first program which i had written above with comments
// Famous Quote Program
// Author: Ahmed
// Date: 17 Feb 2024

let famous_person2: string = "Albert Einstein"; // Storing the name of the famous person
let quote3: string = "A person who never made a mistake never tried anything new."; // Storing the famous quote

let message3: string = `${famous_person2} once said, "${quote3}"`; // message with the famous person's name and quote
console.log(message3); // Printing the message to the console


//second program which i had written above with comments
//  Author: Ahmed
// Date: 17 Feb 2024

// Addition operation to get the number 8
console.log(5 + 3);

// Subtraction operation to get the number 8
console.log(10 - 2);

// Multiplication operation to get the number 8
console.log(4 * 2);

// Division operation to get the number 8
console.log(16 / 2);



//question11
let names: string[] = ["Ahmed", "Aamir", "Wasiq", "Samad"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



//question12
// defining an array
let names2: string[] = ["Alice", "Bob", "Charlie", "David"];

// Printing personalized greeting message for each person
for (let i = 0; i < names2.length; i++) {
    console.log(`Hello, ${names2[i]}! Have a great day!`);
}



//question13
// Defining an array 
let transportationModes: string[] = ["bicycle", "car", "motorcycle", "electric scooter"];

// Printing statements about each transportation mode
for (let i = 0; i < transportationModes.length; i++) {
    console.log(`I would like to own a ${transportationModes[i]}.`);
}



//question14
// Defining an array 
let guestList: string[] = ["Samad", "Abdul Rehman", "Nimra"];

// Printing an invitation message for each person on the guest array
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}



//question15
// identifying the guest who cant' make it
const guestWhoCantMakeIt: string = "Abdul Rehman";

// the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Finding the location or index of the guest who can't make it in the original array
const indexOfGuestWhoCantMakeIt: number = guestList.indexOf(guestWhoCantMakeIt);

// Replacing the name of the guest who can't make it with the  new guest 
guestList[indexOfGuestWhoCantMakeIt] = "Laiba";

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}



//question16
// Informing people about bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Adding a new guest to the start of the array
guestList.unshift("Jabbar");

// Adding a new guest to the middle of the array
const middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Sumaiya");

// Using append() function for adding a new guest to the end of the array
guestList.push("Seerat");

// Print a new set of invitation messages for each person in your updated list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner. We would be honored to have your presence.`);
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}



//question 17
// Informing that only two people can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Removing guests so that only two names should remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print an invitation message for the remaining two guests
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are still cordially invited to dinner. We would be honored to have your presence.`);
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}


//question 19
console.log(`Number of people invited to dinner: ${guestList.length} `);


// Remove the last two names from your list
guestList.splice(0, guestList.length);

// Printing an empty list
console.log("Updated guest list:", guestList);



//question 18
// defining an array
let placesToVisit = ["Switzerland", "Paris", "New York", "Brisbane", "Iceland"];

// Printing an array in it's original order
console.log("Original Order:", placesToVisit);

// Printing an array in alphabetical order by making the copy of array using spread operator and not modifying the actual array
let sortedArray = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedArray);

// printing an original array to show that it's order is still same
console.log("Original Order (unchanged):", placesToVisit);

// Printing an array in reverse alphabetical order by making the copy of array using spread operator and not modifying the actual array
let reverseSortedArray = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);

// printing an original array to show that it's order is still same
console.log("Original Order (unchanged):", placesToVisit);

// Reversing the order of the array to show that now the original order has been reversed.
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reversing the order of the array again to show it's original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

// Sorting and printing the original array in alphabetical order 
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// / Sorting and printing the original array in reverse alphabetical order 
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);



//question 20

// defining an array
let languages: string[] = ['urdu','eng','sindhi' ,'german'];
console.log("List of languages");
//for each loop for iterating over the array 
languages.forEach(language => 
//printing statement for priniting the list of languages
    console.log(language));


