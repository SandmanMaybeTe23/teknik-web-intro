import {player} from'./player.js';
import { inputHandler } from './input.js';
import { backBlasters } from './backblast.js';

window.addEventListener( 'load', function(){
    const canvas = this.document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height =500;

    class Game{
        constructor(width, height){
           this.width = width;
           this.height = height; 
           this.groundMargin = 120;
           this.speed = 3;
           this.backBlasters = new backBlasters(this);
           this.player = new player(this);
           this.input = new inputHandler(); 
           
        }
        update(deltaTime){
            this.backBlasters.update();
            this.player.update(this.input.keys, deltaTime);

        }
        draw(context){
            this.backBlasters.draw(context);
            this.player.draw(context);
        }
        
    }

   const game = new Game(canvas.width, canvas.height);
    console.log(game);  
    let lastTime = 0;

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
       
        lastTime = timeStamp;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});

