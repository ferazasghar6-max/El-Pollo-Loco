import { level1 } from "../levels/level1.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Level } from "./level.class.js";
import { MovableObjekt } from "./movable-object.class.js";

export class Endboss extends MovableObjekt {

    width = 300;
    height = 400;
    x = 2600;
    y = 55;

    constructor(){
        super().loadImage("img/4_enemie_boss_chicken/2_alert/G5.png");
        this.loadImages(ImageHub.endboss.alert);
        this.animate();
    }
    
    animate(){
        IntervalHub.startInterval(() => {
            this.playAnimation(ImageHub.endboss.alert);
        }, 200);
    }
}