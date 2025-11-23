import { IntervalHub } from "../models/intervalHub.class.js";
import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";


let canvas;
let world;




function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    Keyboard.setControls();
    console.log("My Character is", world.character);
    console.log(IntervalHub.allIntervals);
    // console.log(world.character.world.keyboard);
}


 

init();