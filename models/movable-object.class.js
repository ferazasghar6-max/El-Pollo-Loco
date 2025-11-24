import { DrawableObject } from "./drawable-object.class.js";
import { IntervalHub } from "./intervalHub.class.js";



export class MovableObjekt extends DrawableObject{

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5; // Fallgeschwindigkeit
    energy = 100;
    lastHit = 0;
    
    
    applyGravity(){
        IntervalHub.startInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25); // Bewegung der Objekte auf der Y-Achse (hoch uns runter)
    }

    isAboveGround(){
        // ThrowableObjects sollen immer Fallen!
        // if (this instanceOf ThrowableObject){
        //     return true;
        // } else {
        //     return this.y < 150;
        // }
        return this.y < 150;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
           this.y + this.height > mo.y &&
           this.x < mo.x &&
           this.y < mo.y + mo.height;
    }

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        } else{
            // diese Funktion ist vorgefertigt, und ermöglicht es uns 
            // den Zeitpunkt der Collision in dem Fall zu bestimmen (new Date().getTime()) --> Milisekunden ab dem 01.01.1970
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.energy == 0;
    }

    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; // Differenz in ms
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed < 2;
    }



    moveRight(){
        this.x += this.speed;
    }

    moveLeft() {
            this.x -= this.speed;
    }

    jump(){
        this.speedY = 30;
    }


    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
}


}