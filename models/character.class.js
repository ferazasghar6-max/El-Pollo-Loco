import { level1 } from "../levels/level1.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Level } from "./level.class.js";
import { MovableObjekt } from "./movable-object.class.js";

export class Character extends MovableObjekt {
    x = 50;
    y = 90; // 160
    width = 100;
    height = 280;
    speed = 10;
    otherDirection = false;
    world;
    static lastKeypressed = 0;

    constructor() {
        // Ein Bild muss geladen werden, damit es standardmäßig etwas anzeigt, noch bevor man etwas drückt
        super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        // Bilder müssen im constructor vorgeladen werden, um sie später verwenden zu können.
        this.loadImages(ImageHub.pepe.walk);
        this.loadImages(ImageHub.pepe.jump);
        this.loadImages(ImageHub.pepe.dead);
        this.loadImages(ImageHub.pepe.hurt);
        this.loadImages(ImageHub.pepe.idle);
        this.loadImages(ImageHub.pepe.long);
        this.applyGravity();
        // this.animate();
        IntervalHub.startInterval(this.startMovement, 1000 / 60);
        IntervalHub.startInterval(this.startAnimation, 100);
        
    }


    // animate() {
    //     this.startMovement(); 
    //     this.startAnimation(); 
    // }

    startMovement = () => {
            // Mit this.world.level.level_end_x verhindern wir, dass der Character weiter nach rechts laufen kann (Ende vom Level)
            if (Keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                // walking sound hier einfügen
            }

            // this.x > 0 verhindert, dass der character weiter nach links laufen kann
            if (Keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                // walking sound hier einfügen
            }

            // Wir können nur springen wenn unser Character auf dem Boden ist
            if (Keyboard.UP && !this.isAboveGround()) {
                this.jump();
                // jumping sound hier einfügen
            }
            // Hiermit fixieren wir die Camera auf unseren Character
            //  + 100 rückt die Camera etwas weiter nach links, damit Pepe weiter rechts angezeigt wird.
            this.world.camera_x = -this.x + 100;
    }

    startAnimation = () => {
        // Mit If abfragen können wir die dazugehörigen Bilderabfolgen starten
            if (this.isDead()) {
                this.playAnimation(ImageHub.pepe.dead);
                // hier alle animationen und intervalle stoppen und löschen!
                // setTimeout(() =>{
                //     IntervalHub.stopAllIntervals();
                //     // funktion zum auslösen des "du hast verloren" Bildes // youLost()
                // }, 400)
            } else if (this.isAboveGround()) {
                this.playAnimation(ImageHub.pepe.jump);
                this.long();
            } else if (this.isHurt()) {
                this.playAnimation(ImageHub.pepe.hurt);
                this.long();
            } else if (Keyboard.RIGHT || Keyboard.LEFT) {
                this.playAnimation(ImageHub.pepe.walk);
                this.long();
            } else if (this.isWaitingLong()) {
                this.playAnimation(ImageHub.pepe.long);
            } else {
                this.playAnimation(ImageHub.pepe.idle);
            }
    }

    long() {
        Character.lastKeypressed = new Date().getTime();
    }

    isWaitingLong() {
        let timePassed = new Date().getTime() - Character.lastKeypressed; // Differenz in ms
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed > 5;
    }

    jump() {
        this.speedY = 30;
    }
}
