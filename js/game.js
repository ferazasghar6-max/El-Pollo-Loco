import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";


let canvas;
let world;
let keyboard = new Keyboard();




function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    console.log("My Character is", world.character);
    
    
    // console.log(world.character.world.keyboard);
}

window.addEventListener("keydown",(e) => {
    if(e.key == 'd'){
        keyboard.D = true;
    }
});
 

init();