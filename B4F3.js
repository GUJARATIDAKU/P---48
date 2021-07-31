class B4F3{
    constructor(){

        this.title = createElement("h2");
        this.p21 = createElement("ol");
        this.p22 = createElement("ol");
        this.p23 = createElement("ol");
        this.p24 = createElement("ol");

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

   
        this.p21.html("Avoid close contact with people where infected may be seen for instance hospitals")
        this.p21.position(100,200);

     
        this.p22.html("Screening for those who have a high risk")
        this.p22.position(100,250);

  
        this.p23.html("Vaccinations if you are infected so that it does not spread")
        this.p23.position(100,300);


        this.p24.html("Foods for tuberculosis are banana, peanut, cereal porridge, wheat and ragi, mango, orange, sweet pumpkin carrots, amla, guava, tomato, nuts and seeds, whole grain cereals, seeds, nuts, fish and chicken.")
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