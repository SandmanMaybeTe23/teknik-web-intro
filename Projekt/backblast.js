class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height= height;
        this.speedModifier= speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update(){
        if(this.x < -this.width ) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier

    }
    draw(context){
        context.drawImage(this.image , this.x , this.y , this.height , this.width);
        

    }
}



export class backBlasters {
    constructor(game){
        this.game = game;
        this.width = 1667;
        this.height = 500;
        this.layer5image = document.getElementById('layer5');
        this.layer1 = new Layer( this.game, this.width, this.height, 1, this.layer5image);
        this.backBlasterLayers = [this.layer1];
    }
    update(){
        this.backBlasterLayers.forEach(layer =>{
            layer.update();
            
        })
    }
    draw(context){
        this.backBlasterLayers.forEach(layer => { 
            console.log(layer)
            layer.draw(context);
        })
    }

}
