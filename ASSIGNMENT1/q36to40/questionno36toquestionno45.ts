//question 36
//defining make_shirt function for accepting the size and the text of a message that should be printed on the shirt.
function make_shirt(size: string, message: string): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

//calling function with two arguments size as large and hello world as message
make_shirt("large","Hello, World!");
//calling function with two arguments size as medium and hello world as message
make_shirt("medium","Hello, World!");
//calling function with two arguments size as small and hello world as message
make_shirt("small","Hello, World!");




//question 37
//defining make_shirt function for accepting by default large size and the text of a message that should be printed on the shirt.
function make_shirt_large(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

//calling function with two arguments size as large and I love TypeScript as message
make_shirt_large();

//calling function with two arguments size as medium and I love TypeScript as message
make_shirt_large("medium");

//calling function with two arguments size as small and typescript is great as message
make_shirt_large("small", "Typescript is great!");




//question 38
//defining function which take city name and country name by default as an parameter
function describe_city(city_name : string, country_name : string = "pakistan") : void {
//printing statment for dsiplaying city name and country name
    console.log(`"${city_name} is in ${country_name}"`);
}

//calling function with only city name as country name is already defined by default
describe_city("Karachi");
//calling function with only city name as country name is already defined by default
describe_city("Lahore");
//calling function with  city name and country name to change the default country name
describe_city("New York", "USA");




//question 39
//defining function which take city name and country name as an parameter
function city_country(cityName : string, countryName : string ) : void {

    //printing statment for dsiplaying city name and country name
    console.log(`"${cityName},${countryName}"`);
}

//calling function with  city name and country name 
city_country("Karachi", "Pakistan");
city_country("Dubai", "UAE");
city_country("Jeddah", "KSA");




//question 40
//defining an interface named as album which contain properties and it's values
interface Album{
Artist : string,
Title : string,
Tracks?: number,
}

//defining make_album function which take artist name, title and track as input but track is not necessary to provide which inherit from the properties of interface named as Album
function make_album(Artist : string, Title : string, Tracks?: number): Album {
//defining object named as album which inherits the properties of interface named as Album
    let album : Album = 
{
    Artist : Artist,
    Title : Title,
};

//condition to check if tracks is not equal to undefined put 
if(Tracks !== undefined){
       // If provided so add tracks property to the album object
    album.Tracks = Tracks;
}
//returning album object
return album;
}

//creating an variable which take make album function as input along with it's parameters like artist name title and track
let album1 = make_album("Arjit Singh", "Ashiqui", 100);
let album2 = make_album("Atif Aslam", "Pehli Dafa");
let album3 = make_album("Asim Azhar","Teri Meri Kahaniyaan",20);

//printing the variables
console.log(album1);
console.log(album2);
console.log(album3)



//question 41

//defining array with some magicians names
let magician_array : string[] = ['robert','james','shepherd'];

//defining function show magicians which takes magician array as input with no return type
function show_magicians(magician_array : string[]): void{
    //for loop for iterating and  printing magicians names one by one along with the statement given.
    for(let magicians of magician_array) {
        console.log(`Magician name is:${magicians}`);
    };
};

//calling function
show_magicians(magician_array);



//question 42
//defining function make great which takes magician array as input with return type 
function make_great(magician_array: string[]): string[] {
    //definging one new array which consist of an empty array
    let greatMagicians : string[] = [];
    //for loop for iterating through magicians names one by one.
    for (let magicians of magician_array) {
        //using push function of array for pushing magician array elements into greatMagicians array along with the statement given.
        greatMagicians.push("the Great " + magicians);
    }
    //returining the greatMagicians array
    return greatMagicians;
}




//question 43
//defining greatMagicians array which includes make_great function which conatin copy of magician array as an parameter
let greatMagicians: string[] = make_great([...magician_array]);

//printing original array
console.log("Orginal Magicians");
show_magicians(magician_array);

//printing greatMagicians array
console.log("Great Magicians");
show_magicians(greatMagicians);




//question 44
//defining a function which takes items array as an parameter and with no return type 
function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    // condition to check that if there is no item than it will print if condition
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    // condition to check that if there an item than it will print else condition
    } else {
        console.log("You ordered a sandwich with:");
        //for each loop for iterating through each item in an item's array
        items.forEach(item => {
            //printing items
            console.log(`- ${item}`);
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



//question 45
//defining an interface named as Car which contain properties and it's values
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

//defining a function which takes manufacturer, model, and copy of an option array as an parameter which inherits the properties of Interface named as Car 
function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {

    //defining object named as car which inherits the properties of interface named as Car
    const car: Car = {
        manufacturer,
        model
    };

    // Adding additional properties as key-value pairs in the options array
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    //returning car object
    return car;
}

//defining variable which take function named as createCar and it's paramter as input 
const myCar = createCar("Hyundai", "Sonata", ["color", "white"], ["year", 2021]);
//prinitng the result
console.log(myCar);
