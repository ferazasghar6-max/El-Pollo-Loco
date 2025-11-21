import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { ImageHub } from "./imageHub.class.js";
import { Keyboard } from "./keyboard.class.js";


export class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
       ];  
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/air.png", 719),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard){
        // Mit ctx.getContext("2d") lässt uns Methoden aufrufen für unser Canvas 
        // (stell es dir vor wie async und await bei Funktionen). Wichtig! >> ctx als Variable immer so nehmen!
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    setWorld(){
        // nochmal genau anschauen was wurde hier übergeben? lt. Video wird hier das keyboard übergeben aber wie genau?
        // wieso nicht keyboard? auf was bezieht sich das this dann in dem Fall? lt. Video übergeben wir alles in World?
        this.character.world = this;
    }


    draw(){
        // mit dieser Methode (clearRect(unserem canvas wie unten)) clearen wir den Canvas und können, 
        // wenn wir die Position von unseres movable-objekt verändern ohne das es sich doppelt.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Wir verschieben unsere camera um 100px nach rechts ,0 ist die Y-Achse, die wir natürlich nicht verschieben wollen (muss aber angegeben werden!)
        this.ctx.translate(this.camera_x, 0);

        // mit addObjectstoMap lassen wir anderst als beim character (addToMap) eine forEach schleife drüber laufen 
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        
        // Hier verschieben unsere camera wieder um 100px zurück (,0) ist die Y-Achse
        this.ctx.translate(-this.camera_x, 0);

        // bei dieser Funktion muss eine neue Variable erstellt werden, da requestAnimationFrame kein this kennt.
        let self = this;
        // Diese vorgefertigete Methode sorgt dafür, dass das Bild so oft gezeichnet wird, wie es dir Grafikkarte hergibt.
        // (Wird immerwieder gezeichnet)
        requestAnimationFrame(function(){
            self.draw();
        });
    }

    // damit lassen wir uns alle unsere Gegner / Hintergründe ect. anzeigen (wir rendern z.b. alle 3 chickens! / forEach)
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    // mo in dem Fall MovableObject
    // Diese funktion wird in addObjectsToMap ebenfalls aufgerufen
    addToMap(mo) {
        // Um Character zu spiegeln die Methoden sind von ctx vorgefertigt
        if(mo.otherDirection){
            // speichern der aktuellen Einstellungen von unserem Kontext
            this.ctx.save();
            // einfügen des Bildes an der richtigen X-Achse Stelle
            this.ctx.translate(mo.width, 0);
            // spiegeln an der Achse
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        // drawImage ist vorgefertigt von JS // hier fügen wir den character ein
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        // Hier werden die Einstellungen für das spiegeln sofern wir sie verändert haben wieder rückgängig gemacht
        if(mo.otherDirection){
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }







}