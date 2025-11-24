
export class Keyboard {

    static UP = false;
    static LEFT = false;
    static RIGHT = false;
    static D = false;


    static setControls(){
        window.addEventListener("keydown", (e) => {
            if(e.key == ' '){
                Keyboard.UP = true;
            }
            if(e.key == 'ArrowLeft'){
                Keyboard.LEFT = true;
            }
            if(e.key == 'ArrowRight'){
                Keyboard.RIGHT = true;
            }
            if(e.key == 'd'){
                Keyboard.D = true;
            }
        });

        window.addEventListener("keyup", (e) => {
            if(e.key == ' '){
                Keyboard.UP = false;
            }
            if(e.key == 'ArrowLeft'){
                Keyboard.LEFT = false;
            }
            if(e.key == 'ArrowRight'){
                Keyboard.RIGHT = false;
            }
            if(e.key == 'd'){
                Keyboard.D = false;
            }
        });
    }
}