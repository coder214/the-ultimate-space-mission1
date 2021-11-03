class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME");
        this.button = createButton("Start");
    }

    elementPositions() {
        this.input.position(width/2, height/2);
        this.button.position(width/2+50, height/2+50);
    }

    elementStyles() {
        this.input.class("customInput");
        this.button.class("customButton");
    }

    hide(){
        this.input.hide();
        this.button.hide();
    }

  handleMousePressed(){
        this.button.mousePressed(() => {
           this.input.hide();
           this.button.hide();
           var spaceship = createSprite(width/2-300, height/2, 10, 10);
           spaceship.addImage(spaceshipImg);        
        });
    }


display(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed();
}
}