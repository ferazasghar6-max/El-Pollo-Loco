
export class SoundHub {
    // Audiodateien 
    static pepeWalk = new Audio('./sounds/character/characterRun.mp3');
    static pepeJump = new Audio('./sounds/character/characterJump.wav');
    static pepeHurt = new Audio('./sounds/character/characterDamage.mp3');
    static pepeDead = new Audio('./sounds/character/characterDead.wav');
    static pepeSleep = new Audio('./sounds/character/characterSnoring.mp3');

    static enemyDead = new Audio('./sounds/chicken/chickenDead.mp3');
    static enemyHit = new Audio('./sounds/chicken/chickenDead2.mp3');
    static endBoss = new Audio('./sounds/endboss/endbossApproach.wav');


    static collectCoins = new Audio('./sounds/collectibles/collectSound.wav');
    static collectBottle = new Audio('./sounds/collectibles/bottleCollectSound.wav');
    static bottleBreak = new Audio('./sounds/collectibles/bottleCollectSound.wav');
    static gameStart = new Audio('./sounds/game/gameStart.mp3');


    // Array, das alle definierten Audio-Dateien enthält
    static allSounds = [];


    // Spielt eine einzelne Audiodatei ab
    static playOne(sound) {  // instrumentId nur wichtig für die Visualisierung
        sound.volume = 0.2;  // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.currentTime = 0;  // Startet ab einer bestimmten stelle (0=Anfang/ 5 = 5 sec.)
        sound.play();  // Spielt das übergebene Sound-Objekt ab
        this.allSounds.push(sound);

        // const instrumentImg = document.getElementById(instrumentId);  // nur wichtig für die Visualisierung
        // instrumentImg.classList.add('active');  // nur wichtig für die Visualisierung
    }


    // Stoppt das Abspielen aller Audiodateien
    static stopAll() {
        SoundHub.allSounds.forEach(sound => {
            sound.pause();  // Pausiert jedes Audio in der Liste
        });

        // document.getElementById('volume').value = 0.2;  // Setzt den Sound-Slider wieder auf 0.2
        // const instrumentImages = document.querySelectorAll('.sound_img'); // nur wichtig für die Visualisierung
        // instrumentImages.forEach(img => img.classList.remove('active')); // nur wichtig für die Visualisierung
    }


    // Stoppt das Abspielen einer einzelnen Audiodatei
    static stopOne(sound) {
        sound.pause();  // Pausiert das übergebene Audio
        // const instrumentImg = document.getElementById(instrumentId); // nur wichtig für die Visualisierung
        // instrumentImg.classList.remove('active'); // nur wichtig für die Visualisierung
    }


    // ##########################################################################################################################
    // ################################################  Sound Slider - BONUS !  ################################################
    // Setzt die Lautstärke für alle Audiodateien
    static objSetVolume(volumeSlider) {
        let volumeValue = document.getElementById('volume').value;  // Holt den aktuellen Lautstärkewert aus dem Inputfeld
        volumeSlider.forEach(sound => {
            sound.volume = volumeValue;  // Setzt die Lautstärke für jedes Audio wie im Slider angegeben
        });
    }
}
