class B9F1{
    constructor(){

        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p1 = createElement("ol");
        this.p2 = createElement("ol");
        this.p3 = createElement("ol");
        this.p4 = createElement("ol");
        this.p5 = createElement("ol");
        this.p6 = createElement("ol");
        this.p7 = createElement("ol");
        this.p8 = createElement("ol");
        this.p9 = createElement("ol");
        this.p10 = createElement("ol");
        this.p11 = createElement("ol");
        this.image = createElement("img").attribute("src","Images/covid_img.jpg");   

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


        this.p1.html("Fever or chills")
        this.p1.position(100,200);


        this.p2.html("Cough")
        this.p2.position(100,250);


        this.p3.html("Shortness of breath or difficulty breathing")
        this.p3.position(100,300);


        this.p4.html("Fatigue")
        this.p4.position(100,350);

 
        this.p5.html("Muscle or body aches")
        this.p5.position(100,400);


        this.p6.html("Headache")
        this.p6.position(100,450);

    
        this.p7.html("New loss of taste or smell")
        this.p7.position(100,500);
        
     
        this.p8.html("Sore throat")
        this.p8.position(100,550);

      
        this.p9.html("Congestion or runny nose")
        this.p9.position(100,600);


        this.p10.html("Nausea or vomiting")
        this.p10.position(100,650);


        this.p11.html("Diarrhoea")
        this.p11.position(100,700);

  
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
        this.p7.hide();
        this.p8.hide();
        this.p9.hide();
        this.p10.hide();
        this.p11.hide();


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
        this.p7.show();
        this.p8.show();
        this.p9.show();
        this.p10.show();
        this.p11.show();


        this.image.show();
    }

}