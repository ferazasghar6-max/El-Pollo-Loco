import { ImageHub } from "./imageHub.class.js";
import { MovableObjekt } from "./movable-object.class.js";

export class Chicken extends MovableObjekt{
    // Math.random() holt zufällig eine Zahl zwischen 0 und 1 * 500 dann zwischen 1 und 500  
    x = 200 + Math.random() * 500;
    y = 335;
    height = 100;
    width = 100;
    speed = 0.35 + Math.random() * 0.35;
    

      constructor(){
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
        // Erst müssen alle Bilder geladen werden  über loadImages um sie anzeigen zu können
        // über animate
        this.loadImages(ImageHub.chickenNormal.walk);
        this.animate();
         
    }

        animate(){
            this.moveLeft();

            setInterval(() =>{
            let i = this.currentImage % ImageHub.chickenNormal.walk.length;
            let path = ImageHub.chickenNormal.walk[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        
            }, 200);
        }

}