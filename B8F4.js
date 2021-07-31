class B8F4{
    constructor(){
      this.title1 = createElement("h2");
      this.title2 = createElement("h4");
      this.title3 = createElement("h4");
 

      this.p21 = createElement("ol");
      this.p22 = createElement("ol");

      this.link = createElement("a").attribute("href","https://rehydrate.org/faq/all-questions.htm");
      
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


        this.title2.html("Why is diarrhoea dangerous?")
        this.title2.position(100,180);

 
        this.p21.html("When a person gets diarrhoea, the body begins to lose a lot of water and salts - both of which are necessary for life. If the water and salts are not replaced fast, the body starts to 'dry up' or get dehydrated. Severe dehydration can cause death.")
        this.p21.position(100,240);

  
        this.title3.html("What is diarrhoea?")
        this.title3.position(100,300);
        
      
        this.p22.html("Diarrhoea is an intestinal disorder characterized by abnormal fluidity and frequency of fecal evacuations, generally the result of increased motility in the colon; may be an important symptom of such underlying disorders as dysenteric diseases, lactose intolerance, GI tumors, and inflammatory bowel disease. Diarrhoea is the passage of watery stools. This means body fluids and salts can be quickly lost from the body. The child becomes dry (dehydrated) and this is very dangerous and may kill the child.")
        this.p22.position(100,360);

        
        this.link.html("Click here to know more")
        this.link.position(displayWidth/2,displayHeight-100);
    }

    hide(){
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();

      
      this.p21.hide();
      this.p22.hide();


      this.back.hide();

      this.link.hide();

  }

  show(){
    

      this.title1.show();
      this.title2.show();
      this.title3.show();

      
      this.p21.show();
      this.p22.show();


      this.back.show();

      this.link.show();

  }
}