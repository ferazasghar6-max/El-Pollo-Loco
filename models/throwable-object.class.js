import { BotleBar } from "./bottle-bar.class.js";
import { Character } from "./character.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MovableObjekt } from "./movable-object.class.js";





export class ThrowableObject extends MovableObjekt {

    x;
    y;
    height = 70;
    width = 60;

    constructor(_x, _y){
        super().loadImage("img/7_statusbars/3_icons/icon_salsa_bottle.png");
        this.loadImages(ImageHub.botle.botleRotation);
        this.x = _x;
        this.y = _y;
        this.throw();
        IntervalHub.startInterval(this.startXMovement, 50);
        IntervalHub.startInterval(this.startRotation, 200);
        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
    }

    isAboveGround(){
        return true;
    }

    throw(){
        Character.lastKeypressed = new Date().getTime();
        // otherdirection mit einfügen
        this.speedY = 30;
        this.applyGravity();
        this.startXMovement();
        this.startRotation();
        BotleBar.pice --;
        console.log(BotleBar.pice);         
    }

    startXMovement= () => {
            this.x += 10;
    }

    startRotation = () => {
            this.playAnimation(ImageHub.botle.botleRotation);
    }


}