class B1F4{
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
        this.link = createElement("a").attribute("href","https://www.webmd.com/heart-disease/heart-disease-faq");
        
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

        
        this.title2.html("What Should I Do If I Have Risk Factors for Coronary Artery Disease?")
        this.title2.position(100,180);

        
        this.p21.html("You can do several things to cut your chances of heart disease. If your arteries are already clogged, you can slow the damage with a healthier diet, exercise, quitting smoking, and reducing stress. With lifestyle changes, you can stop or even reverse the narrowing of arteries. While this is important for those with risk factors for the disease, it is even more important if you have had a heart attack or procedure to restore blood flow to your heart or other areas of your body.")
        this.p21.position(100,240);

      
        this.title3.html("What's the Link Between Smoking and Heart Disease?")
        this.title3.position(100,300);
        
       
        this.p22.html("About 30% of deaths from heart disease in the U.S. are directly related to cigarette smoking. Smoking is a major cause of atherosclerosis.Among other things, the nicotine in smoke causes:Less oxygen to the heart.Higher blood pressure and heart rate.More blood clotting.Damage to cells that line coronary arteries and other blood vessels")
        this.p22.position(100,360);

        
        this.title4.html("What Dietary Changes Can I Make to Reduce My Heart Disease Risk?")
        this.title4.position(100,420);

      
        this.p24.html("Eating right is a powerful way to reduce or even eliminate some heart disease risk factors. A heart-healthy diet can help cut total and LDL  cholesterol, lower blood pressure , lower blood sugar, and help you shed pounds.Try these tips: Eat more vegetables, fruits, whole grains, and legumes.Cut trans fats from your diet. Swap saturated fats for unsaturated ones.Eat lean sources of protein, such as chicken, fish, and soy. Avoid red meat, as this tends to be high in fat and cholesterol.Eat complex carbohydrates such as whole-grain bread, rice, and pasta and limit simple carbohydrates such as regular soda, sugar, and sweets.Cut down on salt.Exercise regularly.")
        this.p24.position(100,460);

        
        this.title5.html("How Common Is Heart Disease Among Women?")
        this.title5.position(100,560);


        this.p26.html("Heart disease is the leading cause of death in women over 40 years old, especially after menopause. Once a woman reaches the age of 50 (about the age of natural menopause), the risk for heart disease increases dramatically. ")
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