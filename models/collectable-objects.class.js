import { DrawableObject } from "./drawable-object.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";



export class CollectableObjekts extends DrawableObject{
    // + Math.random() * 500;
    x = 100 + Math.random() * 2150;
    y = 100 + Math.random() * 200;
    height = 100;
    width = 100;
    currentImage = 0;
    imageCache = {};

    constructor(){
        super().loadImage("img/8_coin/coin_1.png");
        this.loadImages(ImageHub.coin.coinPuls);
        this.animate();
        this.playAnimation(ImageHub.coin.coinPuls);
        IntervalHub.startInterval(this.animate, 500);
    }

    animate = () => {
        this.puls();   
    }
    

    puls(){
        this.playAnimation(ImageHub.coin.coinPuls);
    }

    playAnimation(images){        
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

}   