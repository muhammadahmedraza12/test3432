var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question 36
//defining make_shirt function for accepting the size and the text of a message that should be printed on the shirt.
function make_shirt(size, message) {
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
//calling function with two arguments size as large and hello world as message
make_shirt("large", "Hello, World!");
//calling function with two arguments size as medium and hello world as message
make_shirt("medium", "Hello, World!");
//calling function with two arguments size as small and hello world as message
make_shirt("small", "Hello, World!");
//question 37
//defining make_shirt function for accepting by default large size and the text of a message that should be printed on the shirt.
function make_shirt_large(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
//calling function with two arguments size as large and I love TypeScript as message
make_shirt_large();
//calling function with two arguments size as medium and I love TypeScript as message
make_shirt_large("medium");
//calling function with two arguments size as small and typescript is great as message
make_shirt_large("small", "Typescript is great!");
//question 38
//defining function which take city name and country name by default as an parameter
function describe_city(city_name, country_name) {
    if (country_name === void 0) { country_name = "pakistan"; }
    //printing statment for dsiplaying city name and country name
    console.log("\"".concat(city_name, " is in ").concat(country_name, "\""));
}
//calling function with only city name as country name is already defined by default
describe_city("Karachi");
//calling function with only city name as country name is already defined by default
describe_city("Lahore");
//calling function with  city name and country name to change the default country name
describe_city("New York", "USA");
//question 39
//defining function which take city name and country name as an parameter
function city_country(cityName, countryName) {
    //printing statment for dsiplaying city name and country name
    console.log("\"".concat(cityName, ",").concat(countryName, "\""));
}
//calling function with  city name and country name 
city_country("Karachi", "Pakistan");
city_country("Dubai", "UAE");
city_country("Jeddah", "KSA");
//defining make_album function which take artist name, title and track as input but track is not necessary to provide which inherit from the properties of interface named as Album
function make_album(Artist, Title, Tracks) {
    //defining object named as album which inherits the properties of interface named as Album
    var album = {
        Artist: Artist,
        Title: Title,
    };
    //condition to check if tracks is not equal to undefined put 
    if (Tracks !== undefined) {
        // If provided so add tracks property to the album object
        album.Tracks = Tracks;
    }
    //returning album object
    return album;
}
//creating an variable which take make album function as input along with it's parameters like artist name title and track
var album1 = make_album("Arjit Singh", "Ashiqui", 100);
var album2 = make_album("Atif Aslam", "Pehli Dafa");
var album3 = make_album("Asim Azhar", "Teri Meri Kahaniyaan", 20);
//printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
//question 41
//defining array with some magicians names
var magician_array = ['robert', 'james', 'shepherd'];
//defining function show magicians which takes magician array as input with no return type
function show_magicians(magician_array) {
    //for loop for iterating and  printing magicians names one by one along with the statement given.
    for (var _i = 0, magician_array_1 = magician_array; _i < magician_array_1.length; _i++) {
        var magicians = magician_array_1[_i];
        console.log("Magician name is:".concat(magicians));
    }
    ;
}
;
//calling function
show_magicians(magician_array);
//question 42
//defining function make great which takes magician array as input with return type 
function make_great(magician_array) {
    //definging one new array which consist of an empty array
    var greatMagicians = [];
    //for loop for iterating through magicians names one by one.
    for (var _i = 0, magician_array_2 = magician_array; _i < magician_array_2.length; _i++) {
        var magicians = magician_array_2[_i];
        //using push function of array for pushing magician array elements into greatMagicians array along with the statement given.
        greatMagicians.push("the Great " + magicians);
    }
    //returining the greatMagicians array
    return greatMagicians;
}
//question 43
//defining greatMagicians array which includes make_great function which conatin copy of magician array as an parameter
var greatMagicians = make_great(__spreadArray([], magician_array, true));
//printing original array
console.log("Orginal Magicians");
show_magicians(magician_array);
//printing greatMagicians array
console.log("Great Magicians");
show_magicians(greatMagicians);
//question 44
//defining a function which takes items array as an parameter and with no return type 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    // condition to check that if there is no item than it will print if condition
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
        // condition to check that if there an item than it will print else condition
    }
    else {
        console.log("You ordered a sandwich with:");
        //for each loop for iterating through each item in an item's array
        items.forEach(function (item) {
            //printing items
            console.log("- ".concat(item));
        });
    }
    console.log("--------------------");
}
//calling function to add three items on sandwich 
makeSandwich('egg', 'Cheese', 'Lettuce', 'Tomato');
//calling function to add three items on sandwich 
makeSandwich('chicken', 'egg', 'Cheese');
//calling function to add two items on sandwich 
makeSandwich('Peanut Butter', 'Jelly');
//defining a function which takes manufacturer, model, and copy of an option array as an parameter which inherits the properties of Interface named as Car 
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //defining object named as car which inherits the properties of interface named as Car
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Adding additional properties as key-value pairs in the options array
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    //returning car object
    return car;
}
//defining variable which take function named as createCar and it's paramter as input 
var myCar = createCar("Hyundai", "Sonata", ["color", "white"], ["year", 2021]);
//prinitng the result
console.log(myCar);
