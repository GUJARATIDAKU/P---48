class B10F4{
    constructor(){

      this.title1 = createElement("h2");
      this.title2 = createElement("h4");
      this.title3 = createElement("h4");
      this.title4 = createElement("h4");


      this.p21 = createElement("ol");
      this.p22 = createElement("ol");
      this.p24 = createElement("ol");
      this.p26 = createElement("ol");
      
      this.link = createElement("a").attribute("href","https://www.templehealth.org/services/conditions/chronic-obstructive-pulmonary-disease-COPD/faq");
      
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

   
        this.title2.html("What Are The Risk Factors Of COPD ?")
        this.title2.position(100,180);

   
        this.p21.html("COPD is a chronic lung disease that is strongly linked to cigarette smoking. Other types of tobacco smoking — including pipes, cigars and water pipes — and smoking marijuana are also risk factors.Additional risk factors for COPD include exposure to second-hand smoke and air pollutants (air pollution, chemical fumes or dust), genetics/family history and advancing age.")
        this.p21.position(100,240);

       
        this.title3.html("What Is The Life Expectancy For A COPD Patient ?")
        this.title3.position(100,300);


        this.p22.html("The life expectancy of COPD patients can vary greatly and depends on factors such as the severity of airflow obstruction, a patient’s smoking history and overall health. On average, patients with COPD live 5 to 14 years following diagnosis, depending on the stage. To determine a patient’s survival rate, doctors use the BODE index to measure 4 different factors — body mass index, airway obstruction, dyspnea (a patient’s degree of breathlessness) and exercise tolerance.")
        this.p22.position(100,360);

    
        this.title4.html("What Are The 4 Stages Of COPD ?")
        this.title4.position(100,420);

       
        this.p24.html("The 4 stages of COPD are: 1.Mild   2.Moderate  3.Severe   4.Very Severe")
        this.p24.position(100,460);

      
        this.p26.html("Doctors determine which stage a patient is in by using a breathing test called a pulmonary function test. This test measures how hard it is for a patient to breathe out (called airflow obstruction). Your doctor will also talk to you about your symptoms, how many times you’ve had moderate to severe flare-ups and whether you have other chronic diseases.Patients with COPD are also divided into 4 groups — A, B, C or D. Which group a patient is in depends on his or her symptoms and how often the disease worsens (exacerbates). The 4 groups progress from mild to severe, with Group A patients having mild COPD symptoms and lowest risk of exacerbation, and Group D patients having severe symptoms and frequent exacerbation.")
        this.p26.position(100,490)  
        
        
       
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
      this.p26.hide();

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
      this.p26.show();

      this.back.show();

      this.link.show();

  }

}