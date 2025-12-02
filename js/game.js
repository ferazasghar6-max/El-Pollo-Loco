import { IntervalHub } from "../models/intervalHub.class.js";
import { Keyboard } from "../models/keyboard.class.js";
import { World } from "../models/world.class.js";


let canvas;
let world;


init();

function init(){
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    Keyboard.setControls();
}



function fullscreen(){
    const fullscreenRef = document.getElementById("fullscreen");
    enterFullscreen(fullscreenRef);
}

window.fullscreen = fullscreen;

function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
 

