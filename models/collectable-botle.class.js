
import { CollectableObjekts } from "./collectable-objects.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";



export class BotleObject extends CollectableObjekts{
    // + Math.random() * 500;
    x = 100 + Math.random() * 2150;
    y = 300;
    height = 100;
    width = 100;
    offset = {
        top: 5,
        right: 5,
        left: 5,
        bottom: 5
    }
    rX;
    rY;
    rW;
    rH;

    constructor(){
        super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
        // this.loadImages(ImageHub.botle.botleGround);
        // IntervalHub.startInterval(this.getRealFrame, 1000/60);
    }

}