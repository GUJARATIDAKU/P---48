class B7F3{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p21 = createElement("ol");
        this.p22 = createElement("ol");
        this.p23 = createElement("ol");
        this.p24 = createElement("ol");
        this.p25 = createElement("ol");
    
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

  
        this.p21.html("Stay in well-screened areas in the night")
        this.p21.position(100,200);


        this.p22.html("Use insect repellent")
        this.p22.position(100,250);

   
        this.p23.html("Opt for full-sleeved clothes")
        this.p23.position(100,300);

    
        this.p24.html("Use bed net while sleeping to get rid of the mosquitoes")
        this.p24.position(100,350);

     
        this.p25.html("Diets for Malaria patients are foods rich in nutrients. Add foods like carrot, papaya, beetroots, fruits especially citrus fruits. Also increase the intake of orange, berries, lemon and other foods that are rich in vitamins B and C to boost immunity. You can also opt for dal and rice combinations, chapattis with sprouts/dals, dairy products, etc")
        this.p25.position(100,400);



    }

    hide(){
        this.title.hide();
        
        this.p21.hide();
        this.p22.hide();
        this.p23.hide();
        this.p24.hide();
        this.p25.hide();
  

        this.back.hide();

    }

    show(){
        this.title.show();
        
        this.p21.show();
        this.p22.show();
        this.p23.show();
        this.p24.show();
        this.p25.show();


        this.back.show();

    }
}