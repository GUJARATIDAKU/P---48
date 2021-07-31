class B6F2{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p11 = createElement("ol");
        this.p12 = createElement("ol");
        this.p13 = createElement("ol");
        this.p14 = createElement("ol");
        this.p15 = createElement("ol");
        this.p16 = createElement("ol");
  
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


        this.p11.html("Family history")
        this.p11.position(100,200);

     
        this.p12.html("Old age (more than 65 years)")
        this.p12.position(100,250);

   
        this.p13.html("Unhealthy lifestyle")
        this.p13.position(100,300);

   
        this.p14.html("Hereditary")
        this.p14.position(100,350);

        this.p15.html("Previous head trauma")
        this.p15.position(100,400);

      
        this.p16.html("Having poor communication with people for a long period")
        this.p16.position(100,450);



    }
    
    hide(){
        this.title.hide();
        this.p11.hide();
        this.p12.hide();
        this.p13.hide();
        this.p14.hide();
        this.p15.hide();
        this.p16.hide();
        
        this.back.hide();
    }
    
    show(){
        this.title.show();
        this.back.show();
        this.p11.show();
        this.p12.show();
        this.p13.show();
        this.p14.show();
        this.p15.show();
        this.p16.show();
  
    
    }
   
}