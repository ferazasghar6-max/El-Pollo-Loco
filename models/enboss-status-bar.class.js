
import { DrawableObject } from "./drawable-object.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";


export class EndbossBar extends DrawableObject{
    
    x = 510;
    y = 0;
    height = 60;
    width = 200;
    lastHit;
    percentage;

    constructor(){
        super();
        this.loadImage(ImageHub.statusBar.statusEndboss[0]);
        this.loadImages(ImageHub.statusBar.statusEndboss);
        this.setPercentage(100);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = ImageHub.statusBar.statusEndboss[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if(this.percentage == 100){
            return 5;
        } else if(this.percentage >= 80){
            return 4;
        }else if(this.percentage >= 60){
            return 3;
        }else if(this.percentage >= 40){
            return 2;
        }else if(this.percentage >= 20){
            return 1;
        }else {
            return 0;
        }
    }
}