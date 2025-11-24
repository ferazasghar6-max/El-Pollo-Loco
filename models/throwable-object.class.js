import { IntervalHub } from "./intervalHub.class.js";
import { MovableObjekt } from "./movable-object.class.js";


export class ThrowableObject extends MovableObjekt {

    x;
    y;
    height = 70;
    width = 60;

    constructor(_x, _y){
        super().loadImage("img/7_statusbars/3_icons/icon_salsa_bottle.png");
        this.x = _x;
        this.y = _y;
        this.throw();
    }



    throw(){
        this.speedY = 30;
        this.applyGravity();
        IntervalHub.startInterval(() =>{
            this.x += 10
        }, 50 ); // geschwinigkeit des ThrowableObjekt auf X-Achse (Bewegung nach rechts)
    }



}