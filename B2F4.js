class B2F4{
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
        this.link = createElement("a").attribute("href","https://www.ninds.nih.gov/Disorders/Patient-Caregiver-Education/Hope-Through-Research/Stroke-Hope-Through-Research/Questions-Answers-Stroke");
        
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

        this.title2.html("What should I do if I think someone is having a stroke?")
        this.title2.position(100,180);

     
        this.p21.html("A stroke should be treated as a medical emergency, similar to a heart attack.It is very important to remain calm but to react quickly if someone you're with seems to be having a stroke. The longer you wait, the more likely that further damage to the brain will occur. You should immediately call 9-1-1 or an emergency service. Even if the person appears to 'recover' do not hesitate to call for help. Brain damage can continue to occur for several hours after an attack, so the earlier the stroke victim receives treatment, the better.")
        this.p21.position(100,240);

      
        this.title3.html("What causes a stroke?")
        this.title3.position(100,300);
        
        
        this.p22.html("Strokes sometimes are called brain attacks because they often occur suddenly and result in loss of blood flow to the brain or bleeding into the brain that causes cells to die. Because injury that cell death causes to the brain progresses over time, it is vital to seek help immediately if someone you know is having a stroke.")
        this.p22.position(100,360);

   
        this.title4.html("Are there different types of stroke?")
        this.title4.position(100,420);

       
        this.p24.html("There are two major kinds of stroke. An ischemic stroke is one that is caused by an artery or blood vessel that is blocked. Approximately 80% of strokes are ischemic. Making up the other 20% are haemorrhagic strokes, which occur when a blood vessel or artery bursts and leaks into the brain.")
        this.p24.position(100,460);

        
        this.title5.html("Am I at risk for a stroke?")
        this.title5.position(100,560);

 
        this.p26.html("While hereditary factors play a role in the risk of stroke, there are many things you can do to help reduce your risk. Smoking, obesity, diabetes, and high blood pressure all can greatly increase your risk for a stroke. Risk for stroke provides one more compelling reason to quit smoking. In addition, diet and exercise can help control cholesterol, which is another risk factor for stroke. And, proper medication management can help control diabetes, and high blood pressure.")
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