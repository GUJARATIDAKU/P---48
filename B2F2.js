class B2F2{
    constructor(){

        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p11 = createElement("ol");
        this.p12 = createElement("ol");
        this.p13 = createElement("ol");
        this.p14 = createElement("ol");
        this.p15 = createElement("ol");
        this.p16 = createElement("ol");
        this.p17 = createElement("ol");
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

      
        this.p11.html("People with high BP, high cholesterol")
        this.p11.position(100,200);

     
        this.p12.html("Diabetes are at higher risk")
        this.p12.position(100,250);

       
        this.p13.html("Smoking")
        this.p13.position(100,300);

        
        this.p14.html("Haemorrhage in the brain")
        this.p14.position(100,350);

        
        this.p15.html("Heart disease")
        this.p15.position(100,400);

       
        this.p16.html("Medications")
        this.p16.position(100,450);

        
        this.p17.html("Genetic disorder")
        this.p17.position(100,500);


    }
    
    hide(){
        this.title.hide();
        this.p11.hide();
        this.p12.hide();
        this.p13.hide();
        this.p14.hide();
        this.p15.hide();
        this.p16.hide();
        this.p17.hide();
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
        this.p17.show();
    
    }
   
}