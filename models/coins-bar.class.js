import { ImageHub } from "./imageHub.class.js";
import { StatusBar } from "./status-bar.class.js";


export class CoinsBar extends StatusBar{

        y = 50;
        height = 60;
        width = 200;
        static piece = 0
    
        constructor(){
            super().loadImage("img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png");
            this.loadImages(ImageHub.statusBar.coins);
            this.setPice(0);
        }
    
        setPice(piece){
            CoinsBar.piece = piece;
            let path = ImageHub.statusBar.coins[this.resolveImageIndex()];
            this.img = this.imageCache[path];
        }
    
        resolveImageIndex(){
            if(CoinsBar.piece >= 25){
                return 5;
            } else if(CoinsBar.piece >= 20){
                return 4;
            }else if(CoinsBar.piece >= 15){
                return 3;
            }else if(CoinsBar.piece >= 10){
                return 2;
            }else if(CoinsBar.piece >= 5){
                return 1;
            }else {
                return 0;
            }
        }


}