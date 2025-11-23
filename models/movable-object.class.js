import { IntervalHub } from "./intervalHub.class.js";



export class MovableObjekt{
    x;
    y;
    img;
    height;
    width;
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    // Wozu brauchen wir dieses Objekt genau? Falls nicht richtig beantwortet wird Nico fragen!
    imageCache = {}
    
    applyGravity(){
        IntervalHub.startInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        return this.y < 150;
    }


    // loadImage (img/test.png);
    loadImage(path){
        // this.img = document.getElementById ("image") <img id="image" src"""> / ist das selbe nur für JS
        this.img = new Image(); 
        this.img.src = path;
    }

    // Um uns unsere Bilder anzeigen zu lassen mit x und y Achse, Breite und Höhe
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    // Hier lassen wir uns unsere blauen Rahmen anzeigen um unsere Elemente
    drawFrame(ctx){
        // if(this instanceof Character || this instanceof Chicken){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        // }
    }

    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        // this bezieht sich auf eine globale Variable in der Klasse (Attribut)! 
        // Alles was nur in der Funktion gültig ist wird ohne this geschrieben.
        this.imageCache[path] = img;
        });
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