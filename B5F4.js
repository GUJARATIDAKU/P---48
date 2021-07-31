class B5F4{

    constructor(){
      this.title1 = createElement("h2");
      this.title2 = createElement("h4");
      this.title3 = createElement("h4");
    
    
      this.p21 = createElement("ol");
      this.p22 = createElement("ol");
      this.p23 = createElement("ol");
      this.p24 = createElement("ol");
   
      this.p26 = createElement("ol");
      this.link = createElement("a").attribute("href","https://uihc.org/health-topics/diabetes-frequently-asked-questions");
      
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

     
        this.title2.html("What are the types of diabetes?")
        this.title2.position(100,180);

  
        this.p21.html("Type 1 diabetes.Type 1 diabetes accounts for about 5% of all diagnosed cases of diabetes. Type 1 is usually diagnosed in children and young adults, although it can occur at any time. People with type 1 diabetes must use insulin from an injection or a pump to manage their diabetes.")
        this.p21.position(100,240);


        
     
        this.p22.html("Type 2 diabetes.Type 2 diabetes accounts for about 95% of all cases diagnosed in adults. Several studies have shown that healthy eating, regular physical activity, and weight loss used with medication if prescribed, can help control complications from type 2 diabetes or can prevent or delay the onset of type 2 diabetes.")
        this.p22.position(100,300);


     
        this.p24.html("Gestational diabetes.Gestational diabetes is diagnosed in 2 to 10% of pregnant women. Gestational diabetes can cause health problems during pregnancy for both the child and mother. Children whose mothers had gestational diabetes have an increased risk of developing obesity and type 2 diabetes. Although gestational diabetes often goes away after pregnancy, about half of all women who have gestational diabetes get type 2 diabetes later in life.")
        this.p24.position(100,360);

    
        this.title3.html("What can be done to reduce the risk of diabetes?")
        this.title3.position(100,420);

    
        this.p26.html("Research has shown that the following lifestyle modifications can prevent, or at least delay the onset of type 2 diabetes among people at risk of diabetes: Eating fewer high fat and high calorie foods.Losing at least 5%-7% of body weight (if overweight).Being physically active for 150 minutes every week")
        this.p26.position(100,460)  
        
        
      
        this.link.html("Click Here To Know More")
        this.link.position(displayWidth/2,displayHeight-100);
    }

    hide(){
      this.title1.hide();
      this.title2.hide();
      this.title3.hide();

      
      this.p21.hide();
      this.p22.hide();
      this.p23.hide();
      this.p24.hide();
    
      this.p26.hide();

      this.back.hide();

      this.link.hide();

  }

  show(){
    

      this.title1.show();
      this.title2.show();
      this.title3.show();

      
      this.p21.show();
      this.p22.show();
      this.p23.show();
      this.p24.show();
    
      this.p26.show();

      this.back.show();

      this.link.show();

  }

}