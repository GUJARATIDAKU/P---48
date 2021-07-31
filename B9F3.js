class B9F3{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p21 = createElement("ol");
        this.p22 = createElement("ol");
        this.p23 = createElement("ol");
        this.p24 = createElement("ol");

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


        this.p21.html("Wear a mask")
        this.p21.position(100,200);

        
        this.p22.html("Stay 6 feet away from others")
        this.p22.position(100,250);

        
        this.p23.html("Get Vaccinated")
        this.p23.position(100,300);

     
        this.p24.html("Avoid crowds and poorly ventilated spaces")
        this.p24.position(100,350);




    }

    hide(){
        this.title.hide();
        
        this.p21.hide();
        this.p22.hide();
        this.p23.hide();
        this.p24.hide();


        this.back.hide();

    }

    show(){
        this.title.show();
        
        this.p21.show();
        this.p22.show();
        this.p23.show();
        this.p24.show();
    


        this.back.show();

    }
}