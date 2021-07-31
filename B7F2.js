class B7F2{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p11 = createElement("ol");

    }

    display(){
        
        this.back.position(displayWidth - 200, displayHeight - 200);
        this.back.style("background-color","green");
        this.back.style("width","100px");
        this.back.style("height","30px");
        this.back.style("color","white");
        this.back.mousePressed(()=>{
          gameState = 10;
        })
        
        
        this.title.html("Causes : ")
        this.title.style("color","red")
        this.title.position(100,150);

      
        this.p11.html("Transmission by female Anopheles mosquitoes ");
        this.p11.position(100,200);


    }
    hide(){
        this.title.hide();
        this.p11.hide();

        this.back.hide();
    }
    
    show(){
        this.title.show();
        this.back.show();
        this.p11.show();

    
    }
   
}