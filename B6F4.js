class B6F4{
    constructor(){
      this.title1 = createElement("h2");
      this.title2 = createElement("h4");
      this.title3 = createElement("h4");
      this.title4 = createElement("h4");
  

      this.p21 = createElement("ol");
      this.p22 = createElement("ol");
      this.p24 = createElement("ol");

      this.link = createElement("a").attribute("href","https://www.nia.nih.gov/health/frequently-asked-questions-about-alzheimers-disease");
      
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

      
        this.title2.html("What are the stages of Alzheimer's disease?")
        this.title2.position(100,180);

       
        this.p21.html("Alzheimer's disease progresses in several stages: preclinical, early (also called mild), middle (moderate), and late (severe). During the preclinical stage of Alzheimer's disease, people seem to be symptom-free, but toxic changes are taking place in the brain. A person in the early stage of Alzheimer's may exhibit the signs listed above. As Alzheimer's disease progresses to the middle stage, memory loss and confusion grow worse, and people may have problems recognizing family and friends. As Alzheimer's disease becomes more severe, people lose the ability to communicate. They may sleep more, lose weight, and have trouble swallowing. Eventually, they need total care.")
        this.p21.position(100,240);

      
        this.title3.html("Is Alzheimer's disease hereditary?")
        this.title3.position(100,320);
        

        this.p22.html("Just because a family member has Alzheimer's disease does not mean that you will get it, too.Early-onset Alzheimer's disease, which is rare, can be caused by mutations, or changes, in certain genes. If one of the gene mutations is passed down, the child will usually—but not always—have the disease. For other cases of early-onset Alzheimer's, research shows other genetic components are involved.Most cases of Alzheimer's are late-onset. This form of the disease occurs in a person's mid-60s and is not linked to a specific genetic mutation. However, genetic factors appear to increase a person's risk of developing late-onset Alzheimer's.")
        this.p22.position(100,360);

        
        this.title4.html("Is there a cure for Alzheimer's disease?")
        this.title4.position(100,420);

     
        this.p24.html("Some sources claim that products such as coconut oil or dietary supplements such as Protandim® can cure or delay Alzheimer's. However, there is no scientific evidence to support these claims. Currently, there is no cure for Alzheimer's disease.The U.S. Food and Drug Administration (FDA) has approved several drugs to treat the symptoms of Alzheimer's disease, and certain medicines and other approaches can help control behavioral symptoms.")
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