class B7F4{
    constructor(){
      this.title1 = createElement("h2");
      this.title2 = createElement("h4");
      this.title3 = createElement("h4");
      this.title4 = createElement("h4");


      this.p21 = createElement("ol");
      this.p22 = createElement("ol");
      this.p23 = createElement("ol");
      this.p24 = createElement("ol");

      this.link = createElement("a").attribute("href","https://www.cdc.gov/malaria/about/faqs.html");
      
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

       
        this.title2.html("Who is at risk for malaria?")
        this.title2.position(100,180);

    
        this.p21.html("Anyone can get malaria. Most cases occur in people who live in countries with malaria transmission. People from countries with no malaria can become infected when they travel to countries with malaria or through a blood transfusion (although this is very rare). Also, an infected mother can transmit malaria to her infant before or during delivery.")
        this.p21.position(100,240);

       
        this.title3.html(" How soon will a person feel sick after being bitten by an infected mosquito?")
        this.title3.position(100,300);
        
        
        this.p22.html("For most people, symptoms begin 10 days to 4 weeks after infection, although a person may feel ill as early as 7 days or as late as 1 year later. Two kinds of malaria, P. vivax and P. ovale, can occur again (relapsing malaria). In P. vivax and P. ovale infections, some parasites can remain dormant in the liver for several months up to about 4 years after a person is bitten by an infected mosquito. When these parasites come out of hibernation and begin invading red blood cells (“relapse”), the person will become sick.")
        this.p22.position(100,360);

 
        this.title4.html("Isn’t there a malaria vaccine? And if not, why?")
        this.title4.position(100,420);

 
        this.p24.html("Attempts at producing an effective malaria vaccine and vaccine clinical trials are ongoing. The malaria parasite is a complex organism with a complicated life cycle. The parasite has the ability to evade your immune system by constantly changing its surface, so developing a vaccine against these varying surfaces is very difficult. In addition, scientists do not yet totally understand the complex immune responses that protect humans against malaria. However, many scientists all over the world are working on developing an effective vaccine. Because other methods of fighting malaria, including drugs, insecticides, and insecticide-treated bed nets, have not succeeded in eliminating the disease, the search for a vaccine is considered to be one of the most important research projects in public health.")
        this.p24.position(100,460);

        
        
       
        this.link.html("Click Here To Know More")
        this.link.position(displayWidth/2,displayHeight-100);
    }

    hide(){
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();
      this.title4.hide();

      
      this.p21.hide();
      this.p22.hide();
      this.p23.hide();
      this.p24.hide();
 

      this.back.hide();

      this.link.hide();

  }

  show(){
    

      this.title1.show();
      this.title2.show();
      this.title3.show();
      this.title4.show();

      
      this.p21.show();
      this.p22.show();
      this.p23.show();
      this.p24.show();


      this.back.show();

      this.link.show();

  }
}