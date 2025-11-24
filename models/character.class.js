import { level1 } from "../levels/level1.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Level } from "./level.class.js";
import { MovableObjekt } from "./movable-object.class.js";


export class Character extends MovableObjekt{
    x = 50;
    y = 90; // 160
    width = 100;
    height = 280;
    speed = 10;
    otherDirection = false;
    world;


    constructor(){
        // Ein Bild muss geladen werden, damit es standardmäßig etwas anzeigt, noch bevor man etwas drückt
        super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        // Bilder müssen im constructor vorgeladen werden, um sie später verwenden zu können.
        this.loadImages(ImageHub.pepe.walk);
        this.loadImages(ImageHub.pepe.jump);
        this.loadImages(ImageHub.pepe.dead);
        this.loadImages(ImageHub.pepe.hurt);
        this.applyGravity();
        this.animate();
    }
    
    animate() {
    IntervalHub.startInterval(() => {
        // Mit this.world.level.level_end_x verhindern wir, dass der Character weiter nach rechts laufen kann (Ende vom Level)
        if (Keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            // walking sound hier einfügen
        }
        // this.x > 0 verhindert, dass der character weiter nach lins laufen kann
        if (Keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            // walking sound hier einfügen
        }
        // Wir können nur springen wenn unser Character auf dem Boden ist
        if(Keyboard.UP  && !this.isAboveGround()){
            this.jump();
            // jumping sound hier einfügen
        }
        // Hiermit fixieren wir die Camera auf unseren Character
        //  + 100 rückt die Camera etwas weiter nach links, damit Pepe weiter rechts angezeigt wird.
        this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    // Mit If abfragen können wir die dazugehörigen Bilderabfolgen starten
    IntervalHub.startInterval(() => {
        if(this.isDead()){
            this.playAnimation(ImageHub.pepe.dead);
        } else if(this.isAboveGround()){
            this.playAnimation(ImageHub.pepe.jump);
        } else if(this.isHurt()){
            this.playAnimation(ImageHub.pepe.hurt);
        } else{
            if (Keyboard.RIGHT || Keyboard.LEFT) {
                this.playAnimation(ImageHub.pepe.walk);
            }
        }
    }, 100);
    }

    

    jump(){
        this.speedY = 30;
    }
}