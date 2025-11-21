


export class MovableObjekt{
    x;
    y;
    img;
    height;
    width;
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    // Wozu brauchen wir dieses Objekt genau? Falls nicht richtig beantwortet wird Nico fragen!
    imageCache = {}
    

    // loadImage (img/test.png);
    loadImage(path){
        // this.img = document.getElementById ("image") <img id="image" src"""> / ist das selbe nur für JS
        this.img = new Image(); 
        this.img.src = path;
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
        console.log("Moving right");
    }

        moveLeft(){
        setInterval(()=>{
            this.x -= this.speed;
        // 1000 = 1s / 60 FPS Frames Per Second verschiebt sich das bild um 0.15px nach links
        },1000 / 60);
    }
}