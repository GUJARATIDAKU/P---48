class B3F4{
    constructor(){
        this.title1 = createElement("h2");
        this.title2 = createElement("h4");
        this.title3 = createElement("h4");
        this.title4 = createElement("h4");
        this.title5 = createElement("h4");

        this.p21 = createElement("ol");
        this.p22 = createElement("ol");
        this.p24 = createElement("ol");
        this.p26 = createElement("ol");
        this.link= createElement("a").attribute("href","https://www.cincinnatichildrens.org/service/a/asthma/faq");
        
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
        
        this.title1.html("FAQs : ")
        this.title1.style("color","red")
        this.title1.position(100,150);

   
        this.title2.html("What Is Asthma ? ")
        this.title2.position(100,180);

     
        this.p21.html("Asthma is a chronic condition involving the airways. All asthmatics experience variable, but widespread narrowing of the airways or bronchial tubes. The narrowing results from swelling of the airway lining, increased mucus production, tightening of the muscles around the airways and accumulation of inflammatory cells in the airway. This narrowing causes cough, wheeze and shortness of breath.")
        this.p21.position(100,240);

    
        this.title3.html("How Do I Know If My Child’s Asthma Is Controlled ?")
        this.title3.position(100,300);
        
       
        this.p22.html("Minimal or no asthma symptoms (cough, wheezing or shortness of breath) on a day to day basis.Minimal or no acute asthma episodes or attacks (including ER visits or hospitalizations).Not requiring oral steroids (prednisone) more than once per year.No limitations on activities or school attendance.No more than twice a week use of quick acting rescue medicines such as albuterol.Normal lung function when well")
        this.p22.position(100,360);

        
        this.title4.html("What Makes Asthma Worse And What Triggers Asthma ?")
        this.title4.position(100,420);

      
        this.p24.html("Certain things – called triggers – can cause asthma attacks or make asthma worse. Staying away from or getting rid of triggers can help control asthma symptoms")
        this.p24.position(100,460);

        
        this.title5.html("What Conditions Are Associated With Asthma ?")
        this.title5.position(100,560);

       
        this.p26.html("Children who have allergies to elements of the environment such as pollen, animals, mold, dust and food are more likely to have asthma. Asthma is more likely to develop in children who were born prematurely.")
        this.p26.position(100,600)  
        
        
       
        this.link.html("Click Here To Know More")
        this.link.position(displayWidth/2,displayHeight-100);
    }

    hide(){
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();
        
        this.p21.hide();
        this.p22.hide();
       
        this.p24.hide();
    
        this.p26.hide();

        this.back.hide();

        this.link.hide();

    }

    show(){
      

        this.title1.show();
        this.title2.show();
        this.title3.show();
        this.title4.show();
        this.title5.show();
        
        this.p21.show();
        this.p22.show();
      
        this.p24.show();
     
        this.p26.show();

        this.back.show();

        this.link.show();

    }
}