class B7F1{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p1 = createElement("ol");
        this.p2 = createElement("ol");
        this.p3 = createElement("ol");
        this.p4 = createElement("ol");
        this.p5 = createElement("ol");
        this.p6 = createElement("ol");

        this.image = createElement("img").attribute("src","Images/malaria.jpg");   
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
        
        
        this.title.html("Symptoms : ")
        this.title.style("color","red")
        this.title.position(100,150);

 
        this.p1.html("Fever")
        this.p1.position(100,200);

   
        this.p2.html("Muscle pain ")
        this.p2.position(100,250);


        this.p3.html("Nausea")
        this.p3.position(100,300);

      
        this.p4.html("Abdominal pain.")
        this.p4.position(100,350);

       
        this.p5.html("Headache")
        this.p5.position(100,400);

      
        this.p6.html("Diarrhoea, which can be seen within 7 days after you’ve been bitten by an insect ")
        this.p6.position(100,450);

        
        this.image.style("width","500px")
        this.image.position(displayWidth/2 + 100 , displayHeight/2 - 300);
    }

    hide(){
        this.title.hide();
        this.back.hide();
        this.p1.hide();
        this.p2.hide();
        this.p3.hide();
        this.p4.hide();
        this.p5.hide();
        this.p6.hide();

       this.image.hide();
    
        }
    
    show(){
        this.title.show();
        this.back.show();
        this.p1.show();
        this.p2.show();
        this.p3.show();
        this.p4.show();
        this.p5.show();
        this.p6.show();

    
        this.image.show();
    }
}