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

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){

    return `
    <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id = "coffee"/>
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    `;

}

//test today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch(today){
//here we created case with Sunday cold brew special
    case 0:
        today = "Sunday";

        coffee = {
            name: "Cold brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of cold brew",
            color: "chocolate",
            day: "Sunday",
            desc: `I love cold brew in a hot summer`
        };
    break;
//here we created case with Monday bubble tea special
    case 1:
        today = "Monday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `I love me some bubble tea!`
        };
    break;
//here we created case with Tuesday mocha special
    case 2:
        today = "Tuesday";

         coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of mocha",
            color: "brown",
            day: "Tuesday",
            desc: `I like mocha!`
        };
    break;
//here we created case with Wednesday caramel late special
    case 3:
        today = "Wednesday";

        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of caramel latte",
            color: "coral",
            day: "Wednesday",
            desc: `I love caramel latte!`
        };
    break;
//here we created case with Thursday frappaccino special
    case 4:
        today = "Thursday";

        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of frappaccino",
            color: "tan",
            day: "Thursday",
            desc: `Can't live without frappaccino!`
        };
    break;
    case 5:
        today = "Friday";
//here we created case with Friday pumpkin spice late special
        coffee = {
            name: "Pumpkin spice latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of pumpkin spice latte",
            color: "orange",
            day: "Friday",
            desc: `I like a smell of pumpkin spice taste!`
            };
    break;
    case 6:
        today = "Saturday";
//here we created case with Saturday drip special       
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of drip",
            color: "steelblue",
            day: "Saturday",
            desc: `The drip is so great!`
        };
    break;

    default:
        today ="Day is unknown!";
}


document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);