var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question2
var personName = "Muhammad Ahmed Raza";
var message = "Hello ".concat(personName, ", would you like to learn some Python today?");
console.log(message);
//question3
var personName2 = "Zoha";
// Converting to lowercase
var lowercaseName = personName2.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Converting to uppercase
var uppercaseName = personName2.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Converting to title case
var titlecaseName = personName2.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
console.log("Titlecase:", titlecaseName);
//question4
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//question5
var famous_person = "Albert Einstein";
var quote2 = "A person who never made a mistake never tried anything new.";
var message2 = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
//question6
var personNameWithWhitespace = "\t\n   John Doe   \t\n";
// Printing name with whitespace
console.log("Name with Whitespace:", personNameWithWhitespace);
// Stripping the whitespaces and printing the name
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped Name:", strippedName);
//question7
// Addition
var additionResult = 5 + 3;
console.log("Addition:", additionResult);
// Subtraction
var subtractionResult = 10 - 2;
console.log("Subtraction:", subtractionResult);
// Multiplication
var multiplicationResult = 4 * 2;
console.log("Multiplication:", multiplicationResult);
// Division
var divisionResult = 16 / 2;
console.log("Division:", divisionResult);
//question8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//question9
var favoriteNumber = 42;
var favoriteNumberMessage = "My favorite number is ".concat(favoriteNumber, ".");
console.log(favoriteNumberMessage);
//question10
//first program which i had written above with comments
// Famous Quote Program
// Author: Ahmed
// Date: 17 Feb 2024
var famous_person2 = "Albert Einstein"; // Storing the name of the famous person
var quote3 = "A person who never made a mistake never tried anything new."; // Storing the famous quote
var message3 = "".concat(famous_person2, " once said, \"").concat(quote3, "\""); // message with the famous person's name and quote
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
var names = ["Ahmed", "Aamir", "Wasiq", "Samad"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//question12
// defining an array
var names2 = ["Alice", "Bob", "Charlie", "David"];
// Printing personalized greeting message for each person
for (var i = 0; i < names2.length; i++) {
    console.log("Hello, ".concat(names2[i], "! Have a great day!"));
}
//question13
// Defining an array 
var transportationModes = ["bicycle", "car", "motorcycle", "electric scooter"];
// Printing statements about each transportation mode
for (var i = 0; i < transportationModes.length; i++) {
    console.log("I would like to own a ".concat(transportationModes[i], "."));
}
//question14
// Defining an array 
var guestList = ["Samad", "Abdul Rehman", "Nimra"];
// Printing an invitation message for each person on the guest array
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question15
// identifying the guest who cant' make it
var guestWhoCantMakeIt = "Abdul Rehman";
// the guest who can't make it
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Finding the location or index of the guest who can't make it in the original array
var indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
// Replacing the name of the guest who can't make it with the  new guest 
guestList[indexOfGuestWhoCantMakeIt] = "Laiba";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question16
// Informing people about bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Adding a new guest to the start of the array
guestList.unshift("Jabbar");
// Adding a new guest to the middle of the array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Sumaiya");
// Using append() function for adding a new guest to the end of the array
guestList.push("Seerat");
// Print a new set of invitation messages for each person in your updated list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question 17
// Informing that only two people can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Removing guests so that only two names should remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print an invitation message for the remaining two guests
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are still cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question 19
console.log("Number of people invited to dinner: ".concat(guestList.length, " "));
// Remove the last two names from your list
guestList.splice(0, guestList.length);
// Printing an empty list
console.log("Updated guest list:", guestList);
//question 18
// defining an array
var placesToVisit = ["Switzerland", "Paris", "New York", "Brisbane", "Iceland"];
// Printing an array in it's original order
console.log("Original Order:", placesToVisit);
// Printing an array in alphabetical order by making the copy of array using spread operator and not modifying the actual array
var sortedArray = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedArray);
// printing an original array to show that it's order is still same
console.log("Original Order (unchanged):", placesToVisit);
// Printing an array in reverse alphabetical order by making the copy of array using spread operator and not modifying the actual array
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort().reverse();
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
var languages = ['urdu', 'eng', 'sindhi', 'german'];
console.log("List of languages");
//for each loop for iterating over the array 
languages.forEach(function (language) {
    //printing statement for priniting the list of languages
    return console.log(language);
});
//constructing an object for dog animal by inheriting the properties of animal using inheritance
var dog = {
    gender: "male",
    breed: "German Shephard",
    age: 3
};
//constructing an object for cat animal by inheriting the properties of animal using inheritance
var cat = {
    gender: "female",
    breed: "Persian Cat",
    age: 4
};
//constructing an object for fish animal by inheriting the properties of animal using inheritance
var fish = {
    gender: "female",
    breed: "Godlfish",
    age: 1
};
//Printing the properties of animal 1 which is dog in this case
console.log("Animal 1:");
console.log("Gender: ".concat(dog.gender));
console.log("Gender: ".concat(dog.breed));
console.log("Gender: ".concat(dog.age));
//Printing the properties of animal 2 which is cat in this case
console.log("Animal 2:");
console.log("Gender: ".concat(cat.gender));
console.log("Gender: ".concat(cat.breed));
console.log("Gender: ".concat(cat.age));
//Printing the properties of animal 3 which is fish in this case
console.log("Animal 3:");
console.log("Gender: ".concat(fish.gender));
console.log("Gender: ".concat(fish.breed));
console.log("Gender: ".concat(fish.age));
//question22
var watches = ['rolex', 'tagheur', 'hublot', 'rado'];
// Check if the index is within bounds before accessing
var index = 2;
if (index >= 0 && index < watches.length) {
    console.log(watches[index]);
}
else {
    throw new Error("Index out of bounds error!");
}
//question 23
var car = 'subaru';
//All True Test Cases
// Test 1: Is car equal to 'subaru'? Prediction: True
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2: Is car not equal to 'toyota'? Prediction: True
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota');
// Test 3: Is car length equal to 6? Prediction: True
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6);
// Test 4: Is car length greater than 5? Prediction: True
console.log("Is car.length > 5? I predict True.");
console.log(car.length > 5);
// Test 5: Does car start with 'sub'? Prediction: True
console.log("Does car start with 'sub'? I predict True.");
console.log(car.indexOf('sub') === 0);
//All False Test Cases
// Test 6: Is car strictly equal to 'Subaru'? Prediction: False
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
// Test 7: Is car not strictly equal to 'subaru'? Prediction: False
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
// Test 8: Is car length less than or equal to 5? Prediction: False
console.log("Is car.length <= 5? I predict False.");
console.log(car.length <= 5);
// Test 9: Is car equal to 'ford'? Prediction: False
console.log("Is car == 'ford'? I predict False.");
console.log(car == 'ford');
// Test 10: Is car length equal to 7? Prediction: False
console.log("Is car.length == 7? I predict False.");
console.log(car.length == 7);
//question24
// Tests for equality and inequality with strings
var veg = 'tomato';
// Test 11: Is Veg equal to 'tomato'? Prediction: True
console.log("Is Veg == 'tomato'? I predict True.");
console.log(veg == 'tomato');
// Test 12: Is Veg not equal to 'brinjal'? Prediction: True
console.log("Is Veg != 'brinjal'? I predict True.");
console.log(veg != 'brinjal');
// Tests using the lower case function
var Country = 'USA';
// Test 13: Is country in lowercase equal to 'usa'? Prediction: True
console.log("Is country.toLowerCase() == 'usa'? I predict True.");
console.log(Country.toLowerCase() == 'usa');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number = 12;
// Test 14: Is number equal to 12? Prediction: True
console.log("Is number == 12? I predict True.");
console.log(number == 12);
// Test 15: Is number not equal to 5? Prediction: True
console.log("Is number != 5? I predict True.");
console.log(number != 5);
// Test 16: Is number greater than 5? Prediction: True
console.log("Is number > 5? I predict True.");
console.log(number > 5);
// Test 17: Is number less than or equal to 12? Prediction: True
console.log("Is number <= 12? I predict True.");
console.log(number <= 12);
// Test 18: using "and" and "or" operators
var x = 7;
var y = 12;
// Test 19: Is x greater than 5 and y less than 15? Prediction: True
console.log("Is x > 5 && y < 15? I predict True.");
console.log(x > 5 && y < 15);
// Test 20: Is x less than 5 or y greater than 15? Prediction: False
console.log("Is x < 5 || y > 15? I predict False.");
console.log(x < 5 || y > 15);
// Test whether an item is in an array
var fvtPlayers = ['viratKohli', 'shahidAfridi', 'babarAzam'];
// Test 21: Is 'babarAzam' in the fvtPlayers array? Prediction: True
console.log("Is 'babarAzam' in the fvtPlayers array? I predict True.");
console.log(fvtPlayers.includes('babarAzam'));
// Test whether an item is not in an array
// Test 22: Is 'shoaibMalik' not in the fvtPlayers array? Prediction: True
console.log("Is 'shoaibMalik' not in the fvtPlayers array? I predict True.");
console.log(!fvtPlayers.includes('shoaibMalik'));
//question25
//One Version
var alien_color = "green";
if (alien_color == "green") {
    console.log("Alien Color is: ".concat(alien_color, " hence the player just earned 5 points"));
}
else {
    console.log("No Output");
}
//Another Version
if (alien_color == "red") {
    console.log("Alien Color is: ".concat(alien_color, " hence the player just earned 5 points"));
}
else {
    console.log("No Output");
}
//question26
//one version
if (alien_color == "green") {
    console.log("Alien Color is: ".concat(alien_color, " hence the player just earned 5 points for shooting the alien"));
}
else {
    console.log("Alien Color is: ".concat(alien_color, " hence the player just earned the 10 points"));
}
//another version
if (alien_color == "red") {
    console.log("Alien Color is: ".concat(alien_color, " hence the player just earned 5 points for shooting the alien"));
}
else {
    console.log("Alien Color is: ".concat(alien_color, " hence the player just earned the 10 points"));
}
//question 27
//one version
if (alien_color == "green") {
    console.log("The player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("The player earned 10 points");
}
if (alien_color == "red") {
    console.log("The player earned 15 points");
}
//another version
alien_color = "yellow";
if (alien_color == "green") {
    console.log("The player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("The player earned 10 points");
}
if (alien_color == "red") {
    console.log("The player earned 15 points");
}
//another version
alien_color = "red";
if (alien_color == "green") {
    console.log("The player earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("The player earned 10 points");
}
if (alien_color == "red") {
    console.log("The player earned 15 points");
}
//question 28
//defining an person's age 
var age = 32;
// Checking in which condition person age is matching
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is an elder");
}
//question 29
// defining  an array of three favorite fruits
var favoriteFruits = ['apple', 'pomegrenate', 'watermelon'];
// Checking if certain fruits are in your array
if (favoriteFruits.indexOf('apple') !== -1) {
    console.log("You really like apple!");
}
if (favoriteFruits.indexOf('pomegrenate') !== -1) {
    console.log("You really like pomegrenate!");
}
if (favoriteFruits.indexOf('watermelon') !== -1) {
    console.log("You really like watermelon!");
}
if (favoriteFruits.indexOf('banana') !== -1) {
    console.log("You really like banana!");
}
else {
    console.log("You don't like banana that much.");
}
if (favoriteFruits.indexOf('mango') !== -1) {
    console.log("You really like mango!");
}
else {
    console.log("You don't like mango that much.");
}
//question 30
// Defining an array 
var usernames = ["admin", "abdul", "nimra", "laiba", "ahmed", "seerat"];
// Printing a greeting message for each person on the guest array
for (var i = 0; i < usernames.length; i++) {
    //for admin
    if (usernames[i] === "admin") {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status report?"));
    }
    //for users
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again:)"));
    }
}
//question 31
//removing user's from array
usernames = [];
//checking condition that if there is no users then print the statement below
if (usernames.length == 0) {
    console.log("we need to find some users!");
}
//question 32
//defining current user array
var current_users = ['razzak', 'fatima', 'samrah', 'nimra', 'aamir'];
//defining new user array
var new_users = ['aamir', 'laiba', 'seerat', 'wania', 'razzak'];
//for loop for iterating through new user array
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newusers = new_users_1[_i];
    //defining a variable which is used for checking whether the username is used or not.
    var usernameTaken = false;
    //for loop for iterating through current user array
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var currentusers = current_users_1[_a];
        //if condition for checking that if the user names in current users array matches with user names in new user array with respect to case sensitive also
        if (currentusers.toLowerCase() === newusers.toLowerCase()) {
            //if the above if condition is true then it will convert the usernametaken variable to true 
            usernameTaken = true;
            //break statement for exiting from the loop if the usernametaken return true
            break;
        }
    }
    //if condition for printing that if username taken return true that it will print the username is already taken. plz enter a new name
    if (usernameTaken) {
        console.log("The username '".concat(newusers, "' is already taken. Plz enter a new name!"));
    }
    //else print the username is available
    else {
        console.log("The username '".concat(newusers, "' is available"));
    }
}
//question 33
//defining an array which has numbers from 1 to 9
var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop for iterating through each element in ordinal numbers array
for (var _b = 0, ordinal_numbers_1 = ordinal_numbers; _b < ordinal_numbers_1.length; _b++) {
    var ordinalnumber = ordinal_numbers_1[_b];
    //defing one variable ordinalending as string
    var ordinalEnding = void 0;
    //if condition for checking that if the the no is 1 in ordinal numbers array 
    if (ordinalnumber === 1) {
        //make the value of originalending variable to "st"
        ordinalEnding = "st";
    }
    //else if condition for checking that if the the no is 2 in ordinal numbers array 
    else if (ordinalnumber === 2) {
        //make the value of originalending variable to "nd"
        ordinalEnding = "nd";
    }
    //else if condition for checking that if the the no is 3 in ordinal numbers array 
    else if (ordinalnumber === 3) {
        //make the value of originalending variable to "rd"
        ordinalEnding = "rd";
    }
    //else  make the originalending variable value to "th"
    else {
        ordinalEnding = "th";
    }
    //printing statments for 1 to 9 numbers in the array
    console.log("\"The Number is : \" ".concat(ordinalnumber, " ").concat(ordinalEnding));
}
//question 34
//defining an array of fav_pizza
var fav_pizza = ['tikka', 'fajita', 'cheese'];
//for loop for iterating through fav_pizza array and printing each pizza name.
for (var j = 0; j < fav_pizza.length; j++) {
    console.log(fav_pizza[j]);
}
//for loop for iterating through fav_pizza array and printing the statemnt that "I Like pizza" along with pizza name.
for (var j = 0; j < fav_pizza.length; j++) {
    console.log("'I like ".concat(fav_pizza[j], " pizza.'"));
}
//printing statment which states i really love pizza
console.log("\nI really love pizza!");
//question 35
// defining the array of pet animals
var pet_animals = ['Dog', 'Cat', 'Cow'];
console.log("List of animals:");
//for loop for iterating through each item in pet animals array
for (var _c = 0, pet_animals_1 = pet_animals; _c < pet_animals_1.length; _c++) {
    var petanimal = pet_animals_1[_c];
    //printing the name of the pet animal one by one
    console.log(petanimal);
}
console.log("\nStatements about each animal:");
//for loop for iterating through each item in pet animals array
for (var _d = 0, pet_animals_2 = pet_animals; _d < pet_animals_2.length; _d++) {
    var petanimal = pet_animals_2[_d];
    //printing the name of the animal along with the statement "would make a great pet"
    console.log("A ".concat(petanimal.toLowerCase(), " would make a great pet."));
}
// Additional sentence about what these animals have in common
console.log("\n\t\t -----All of these three animals are considered as most loyal pet animals. That's why any of these animals would make a great pet!-----");
