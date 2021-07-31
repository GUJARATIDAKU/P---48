class B10F2{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p11 = createElement("ol");
        this.p12 = createElement("ol");
        this.p13 = createElement("ol");
        this.p14 = createElement("ol");

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

      
        this.p11.html("Smoking or second-hand smoke")
        this.p11.position(100,200);

       
        this.p12.html("Chemical fumes and other lung irritants")
        this.p12.position(100,250);

       
        this.p13.html("Anyone in the family linked to COPD")
        this.p13.position(100,300);

    
        this.p14.html("History of respiratory infections during childhood")
        this.p14.position(100,350);

  


    }
    
    hide(){
        this.title.hide();
        this.p11.hide();
        this.p12.hide();
        this.p13.hide();
        this.p14.hide();

        this.back.hide();
    }
    
    show(){
        this.title.show();
        this.back.show();
        this.p11.show();
        this.p12.show();
        this.p13.show();
        this.p14.show();

    
    }
    
}