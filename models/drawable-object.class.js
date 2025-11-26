
export class DrawableObject {
    x;
    y;
    height;
    width;
    img;
    currentImage = 0;
    imageCache = {}

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
        // ticket abwarten
        // if(this instanceof Character || this instanceof Chicken){
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height); // ctx.rect(this.rX, this.rY, this.rW, this.rH);
        ctx.stroke();
        // }
    }
    // drawFrame(ctx){
    //     // ticket abwarten
    //     // if(this instanceof Character || this instanceof Chicken){
    //     ctx.beginPath();
    //     ctx.lineWidth = "5";
    //     ctx.strokeStyle = "red";
    //     ctx.rect(this.x + 10, this.y + 60, this.width - 20 -20, this.height -30 -10);
    //     ctx.stroke();
    //     // }
    // }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            // this bezieht sich auf eine globale Variable in der Klasse (Attribut)! 
            // Alles was nur in der Funktion gültig ist wird ohne this geschrieben.
            this.imageCache[path] = img;
        });
    }










}