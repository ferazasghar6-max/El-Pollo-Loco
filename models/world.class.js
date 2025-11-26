import { level1 } from "../levels/level1.js";
import { BackgroundObject } from "./background-object.class.js";
import { BotleBar } from "./bottle-bar.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";
import { CoinsBar } from "./coins-bar.class.js";
import { BotleObject } from "./collectable-botle.class.js";
import { CollectableObjekts } from "./collectable-objects.class.js";
import { Endboss } from "./endboss.class.js";
import { ImageHub } from "./imageHub.class.js";
import { IntervalHub } from "./intervalHub.class.js";
import { Keyboard } from "./keyboard.class.js";
import { Level } from "./level.class.js";
import { StatusBar } from "./status-bar.class.js";
import { ThrowableObject } from "./throwable-object.class.js";


export class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    camera_x = 0;
    coins = new CollectableObjekts();
    botle = new BotleObject();
    botleBar = new BotleBar();
    coinsBar = new CoinsBar();
    statusBar = new StatusBar();
    throwableObjects = [];

    constructor(canvas){
        // Mit ctx.getContext("2d") lässt uns Methoden aufrufen für unser Canvas 
        // (stell es dir vor wie async und await bei Funktionen). Wichtig! >> ctx als Variable immer so nehmen!
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
        IntervalHub.startInterval(this.run, 1000 / 60);
        IntervalHub.startInterval(this.startThrow, 120);
    }

    setWorld(){
        // this ist die Instanz selbst! (Hier wird die gesammte instanzierung der Klasse World übergeben)
        this.character.world = this;
    }

    youLost(){
        
    }

    run = () =>{
        this.checkCollisions();
        this.checkCollisionsCoins();
    }

    checkThrowObjects(){
        if(Keyboard.D && BotleBar.pice > 0 && this.character.otherDirection){ // 
            let bottle = new ThrowableObject(this.character.x, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.botleBar.setPice(BotleBar.pice);
        } else if(Keyboard.D && BotleBar.pice > 0){ // 
            let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.botleBar.setPice(BotleBar.pice);
        }
    }

    startThrow = () =>{
        this.checkThrowObjects();
    }

    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
            } 
        });
    }

    checkCollisionsCoins(){
        this.level.coins.forEach((coins) => {
            if(this.character.isColliding(coins)){
            CoinsBar.piece++;
            this.coinsBar.setPice(CoinsBar.piece);
            // bei Kollision muss der Coin verschwinden
            } 
        });
    }


    draw(){
        // mit dieser Methode (clearRect(unserem canvas wie unten)) clearen wir den Canvas und können, 
        // wenn wir die Position von unseres movable-objekt verändern ohne das es sich doppelt.
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Wir verschieben unsere camera nach rechts ,0 ist die Y-Achse, 
        // die wir natürlich nicht verschieben wollen (muss aber angegeben werden!)
        this.ctx.translate(this.camera_x, 0);

        // mit addObjectstoMap lassen wir anderst als beim character (addToMap) eine forEach schleife drüber laufen 
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        // this.addObjectsToMap(this.level.botle);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        // Hier verschieben wir unsere Camera wieder nach links ,0 ist die Y-Achse, 
        // die wir natürlich nicht verschieben wollen (muss aber angegeben werden!)
        this.ctx.translate(-this.camera_x, 0);

        // --------- Space for fixed Objects --------
        this.addToMap(this.coinsBar);
        this.addToMap(this.statusBar);
        this.addToMap(this.botleBar);

        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);




        // () => Arrow-Function bindet die draw-methode an die Instanz der World-Class)
        requestAnimationFrame( () => this.draw());
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
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        // drawImage ist vorgefertigt von JS // hier fügen wir den character ein
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        
        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        // speichern der aktuellen Einstellungen von unserem Kontext (Bild)
        this.ctx.save();
        // einfügen des Bildes an der richtigen X-Achse Stelle
        this.ctx.translate(mo.width, 0);
        // spiegeln an der Achse
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        // Hier werden die Einstellungen für das spiegeln sofern wir sie verändert haben wieder rückgängig gemacht
        mo.x = mo.x * -1;
        this.ctx.restore();
    }





}