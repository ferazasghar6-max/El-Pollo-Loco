import { BackgroundObject } from "../models/background-object.class.js";
import { Chicken } from "../models/chicken.class.js";
import { Cloud } from "../models/cloud.class.js";
import { CollectableObjekts } from "../models/collectable-objects.class.js";
import { Endboss } from "../models/endboss.class.js";
import { ImageHub } from "../models/imageHub.class.js";
import { Level } from "../models/level.class.js";

export const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject("img/5_background/layers/air.png", -719),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),

        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),

        new BackgroundObject("img/5_background/layers/air.png", 719),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),

        new BackgroundObject("img/5_background/layers/air.png", 719 * 2),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719 * 2),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719 * 2),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719 * 2),

        new BackgroundObject("img/5_background/layers/air.png", 719 * 3),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719 * 3),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719 * 3),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719 * 3)
    ],
    [
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
        new CollectableObjekts("img/8_coin/coin_1.png"),
    ]
); 