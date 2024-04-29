import {plater, player} from'./player.js';

window.addEventListener( 'load', function(){
    const canvas = this.document.getElementById('canvas')
    const ctx = canvas.getcontext('2d')
    canvas.width = 500;
    canvas.height =500;

    class Game{
        constructor(width, height){
           this.width = width;
           this.height = height; 
           this.player = new player(this);
        }
        update(){

        }
        draw(context){
            this.player.draw(context);
        }
        
    }

   const game = new game(canvas.width, canvas.height)
    console.log(game);  

    function animate(){
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});

