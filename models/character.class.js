import { ImageHub } from "./imageHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { MovableObjekt } from "./movable-object.class.js";


export class Character extends MovableObjekt{
    x = 50;
    y = 160;
    width = 100;
    height = 280;
    speed = 10;
    world;


    constructor(){
        super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        this.loadImages(ImageHub.pepe.walk);

        this.animate();
    }
    

    animate(){

        setInterval(() =>{
            if(this.world.keyboard.RIGHT){  
                this.x += this.speed;
                this.otherDirection = false;
            } 
            if(this.world.keyboard.LEFT){
                this.x -= this.speed;
                this.otherDirection = true;
            } 
            this.world.camera_x = -this.x;
        },1000 / 60);

        setInterval(() =>{
            // this.otherDirection = true;
            // this.x += this.speed;
            // if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){ // Ticket abwarten, wieso geht das nicht?
            
            let i = this.currentImage % ImageHub.pepe.walk.length;
            let path = ImageHub.pepe.walk[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            // }
        }, 100);
    }

    jump(){

    }
}