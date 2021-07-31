class B9F4{
    constructor(){

      this.title1 = createElement("h2");
      this.title2 = createElement("h4");
      this.title3 = createElement("h4");
      this.title4 = createElement("h4");


      this.p21 = createElement("ol");
      this.p22 = createElement("ol");
      this.p24 = createElement("ol");

      this.link = createElement("a").attribute("href","https://www.cdc.gov/coronavirus/2019-ncov/faq.html");
      
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


        this.title2.html("What is the FDA doing to respond to the COVID-19 pandemic?")
        this.title2.position(100,180);

     
        this.p21.html("The FDA, along with other federal, state, and local agencies and public health officials across the country and internationally, plays a critical role in protecting public health during the COVID-19 pandemic. FDA staff are working around the clock to support development of  medical countermeasures and are providing regulatory advice, guidance, and technical assistance to advance the development and availability of vaccines, therapies, diagnostic tests and other medical devices for use diagnosing, treating, and preventing this novel virus. The FDA continues to monitor the human and animal food supply and take swift action on fraudulent COVID-19 products.")
        this.p21.position(100,240);


        this.title3.html("Does spraying people with disinfectant lower the spread of COVID-19?")
        this.title3.position(100,350);
        
       
        this.p22.html("Currently there are no data showing that spraying people with aerosolized disinfectants, or having people walk through tunnels or rooms where disinfectant is in the air, can treat, prevent, or lower the spread of COVID-19.Surface disinfectants should not be used on people or animals. Disinfectant products, such as sprays, mists, wipes, or liquids are only to be used on hard, non-porous surfaces (materials that do not absorb liquids easily) such as floors and countertops, or on soft surfaces such as mattresses, sofas, and beds. CDC provides information regarding disinfectant practices for surfaces in the Reopening Guidance for Cleaning and Disinfecting Public Spaces, Workplaces, Businesses, Schools, and Homes. Human antiseptic drugs, such as hand sanitizers, are intended for use on human skin, but are not intended for aerosolization (to be sprayed in the air in very small droplets).  Due to serious safety concerns, including the risk of inhalational toxicity and flammability, the FDA’s temporary policies for alcohol-based hand sanitizers during the COVID-19 public health emergency specifically do not apply to aerosol sprays.  In addition, hand sanitizers are intended for use on the hands, and should never be used over larger body surfaces, swallowed, or inhaled.")
        this.p22.position(100,400);


        this.title4.html("What do I do if I get a rash or other reaction to hand sanitizer?")
        this.title4.position(100,550);


        this.p24.html("Call your doctor if you experience a serious reaction to hand sanitizer. The FDA encourages consumers and health care professionals to report adverse events experienced with the use of hand sanitizers to the FDA’s MedWatch Adverse Event Reporting program: Complete and submit the report online; or Download and complete the form, then submit it via fax at 1-800-FDA-0178.Include as much information as you can about the product that caused the reaction, including the product name, the manufacturer, and the lot number (if available).")
        this.p24.position(100,600);

 
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
      this.p24.show();
 

      this.back.show();

      this.link.show();

  }

}