class B2F3{
    constructor(){        
    this.title = createElement("h2");
    this.p21 = createElement("ol");
    this.p22 = createElement("ol");
    this.p23 = createElement("ol");
    this.p24 = createElement("ol");
    this.p25 = createElement("ol");
    this.p26 = createElement("ol");
    this.back = createButton("Back");
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
        
        this.title.html("Safety Measures : ")
        this.title.style("color","red")
        this.title.position(100,150);

    
        this.p21.html("Quit smoking")
        this.p21.position(100,200);

       
        this.p22.html("Control blood pressure")
        this.p22.position(100,250);

       
        this.p23.html("Maintain a healthy lifestyle")
        this.p23.position(100,300);

        
        this.p24.html("Exercise regularly")
        this.p24.position(100,350);

      
        this.p25.html("Limit alcohol")
        this.p25.position(100,400);

   
        this.p26.html("Eat low fat and high fiber food. Add plenty of green leafy vegetables, beans, tomatoes. Eat fruits, nuts and seeds, pomegranate. Also, intake milk, yoghurt, cheese and their alternatives – mostly reduced fat. Drink plenty of water.")
        this.p26.position(100,450);


    }

    hide(){
        this.title.hide();
        
        this.p21.hide();
        this.p22.hide();
        this.p23.hide();
        this.p24.hide();
        this.p25.hide();
        this.p26.hide();

        this.back.hide();

    }

    show(){
        this.title.show();
        
        this.p21.show();
        this.p22.show();
        this.p23.show();
        this.p24.show();
        this.p25.show();
        this.p26.show();

        this.back.show();

    }
}