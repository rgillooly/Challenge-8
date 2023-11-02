const fs = require("fs");
const {Triangle, Square, Circle} = ("./lib/shapes");
var letters = "";
var shape = "";

Readline.question("Do you want to create a logo? (y/n)", (response) => {
    if (response == 'y') {
        console.log('You said: y');
        getshape();
    }
    else {
        console.log('You said: n, Closing');
        process.exit();
    }
})

function getshape() {
    Readline.question('What shape would you like the logo to be? (Square, Circle, or Triangle)', (shape) => {
    if(shape == triangle) {
        shape = new triangle()
    }
    else if(shape == square) {
        shape = new square()
    }
    else {
        shape = new circle()
    }
}
    )
}

function text(letters) {
    readline.question('What text whould you like on the logo?(Three Chracters Ex: ROG)', (text) => {
        letters = text;
    } )
}