
export class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    level_end_x = 2250;

    constructor(_enemies, _clouds, _backgroundObjects, _coins){
        this.enemies = _enemies;
        this.clouds = _clouds;
        this.backgroundObjects = _backgroundObjects;
        this.coins = _coins;
    }
}