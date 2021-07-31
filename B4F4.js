class B4F4{
    constructor(){

        this.title1 = createElement("h2");
        this.title2 = createElement("h4");
        this.title3 = createElement("h4");
        this.title4 = createElement("h4");
        this.title5 = createElement("h4");

        this.p21 = createElement("ol");
        this.p22 = createElement("ol");
        this.p23 = createElement("ol");
        this.p24 = createElement("ol");
        this.p25 = createElement("ol");
        this.p26 = createElement("ol");
        this.link = createElement("a").attribute("href","https://scdhec.gov/health/diseases-conditions/tuberculosis/tuberculosis-faqs");
        
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

        this.title2.html("How long has TB been around?")
        this.title2.position(100,180);

      
        this.p21.html("TB has been around for a long time. It has been found in Egyptian mummies, meaning it is at least 5,400 years old.TB has been called consumption.In the early 1800s, TB may have caused about one-third of all deaths.Years ago, people who had TB went to a special hospital, called a sanatorium, where they received treatment. Today, most people get their TB pills at home or some other place, like school or work.")
        this.p21.position(100,240);

    
        this.title3.html("How many people who are infected with TB will develop active TB?")
        this.title3.position(100,300);
        
     
        this.p22.html("Without medicine, about 10% of people infected with TB will develop TB disease at some point in their life.Some people are more likely than others to develop TB disease once they have TB infection. This includes people with HIV infection, people who were recently exposed to someone with TB disease and people with certain medical conditions.")
        this.p22.position(100,360);

    
        this.title4.html("How is TB spread?")
        this.title4.position(100,420);

  
        this.p24.html("TB is a germ that is spread through the air by someone who has TB disease. You cannot get TB by eating or drinking after someone.TB spreads when the sick person with TB disease sneezes, coughs, sings or talks.")
        this.p24.position(100,460);

    
        this.title5.html("How will a doctor know if someone has TB disease?")
        this.title5.position(100,560);


        this.p26.html("The doctor will look at all these tests to see if you have TB.If you do, the doctor will prescribe the medications you need to get well.The TB nurse will give you your TB medications, as ordered by the doctor.")
        this.p26.position(100,600)  
        
        
  
        this.link.html("Click here to know more")
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
        this.p23.hide();
        this.p24.hide();
        this.p25.hide();
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
        this.p23.show();
        this.p24.show();
        this.p25.show();
        this.p26.show();

        this.back.show();

        this.link.show();

    }

}