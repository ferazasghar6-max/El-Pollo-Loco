
import { CollectableObjekts } from "./collectable-objects.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";



export class BotleObject extends CollectableObjekts{
    // + Math.random() * 500;
    x = 100 + Math.random() * 2150;
    y = 330;
    height = 100;
    width = 100;
    imageCache = {};
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
        this.loadImages(ImageHub.botle.botleGround);
        // IntervalHub.startInterval(this.getRealFrame, 1000/60);
    }

    getRealFrame = () =>{
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;            
    }
}