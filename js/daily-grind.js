    /*  Here are the main things we likely need to store to each coffee:
    name - name of the coffee
    pic - the picture of the coffee
    color - the color associated with the coffee
    alt - the alt tag identifying coffee
    day - the day of the week
    desc - description of the coffee
    */

let myDate = new Date();

let today = myDate.getDay();

//test today = 3;

switch(today){

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today ="Day is unknown!";
}

let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    color: "pink",
    day: "Wednesday",
    desc: `I love me some bubble tea!`
}

console.log(coffee);