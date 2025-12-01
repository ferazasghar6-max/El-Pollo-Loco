import { DrawableObject } from "./drawable-object.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";



export class CollectableObjekts extends DrawableObject{
  
    x;
    y;
    height;
    width;
    currentImage = 0;
    imageCache = {};
    

    constructor(){
        super();
    }

    getRealFrame = () =>{
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;            
    }

    playAnimation(images){        
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}   