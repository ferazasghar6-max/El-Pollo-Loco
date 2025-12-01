import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { MovableObjekt } from "./movable-object.class.js";

export class Chicken extends MovableObjekt {
    // Math.random() holt zufällig eine Zahl zwischen 0 und 1 * 500 dann zwischen 1 und 500
    x = 1400 + Math.random() * 500;
    y = 335;
    height = 100;
    width = 100;
    speed = 1 + Math.random() * 1;
    energy = 100;
    offset = {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    };
    rX;
    rY;
    rW;
    rH;

    constructor() {
        super();
        this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        // Erst müssen alle Bilder geladen werden  über loadImages um sie anzeigen zu können
        this.loadImages(ImageHub.chickenNormal.walk);
        this.loadImages(ImageHub.chickenNormal.dead);
        IntervalHub.startInterval(this.getRealFrame, 1000 / 60);
        IntervalHub.startInterval(this.startMovement, 1000 / 20);
        IntervalHub.startInterval(this.startAnimation, 200);
    }

    startAnimation = () => {
        // Mit If abfragen können wir die dazugehörigen Bilderabfolgen starten
        if (this.isDead()) {
            this.playAnimation(ImageHub.chickenNormal.dead);
            // wie stoppe ich genau diesen Interval? (startMovement)
        } else {
            this.playAnimation(ImageHub.chickenNormal.walk);
        }
    };

    startMovement = () => {
    if (!this.isDead()) {
        this.moveLeft();
    }
};
}
