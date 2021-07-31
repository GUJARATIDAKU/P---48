class B9F2{
    constructor(){
        this.back = createButton("Back");
        this.title = createElement("h2");
        this.p11 = createElement("ol");
        this.p12 = createElement("ol");
        this.p13 = createElement("ol");
        this.p14 = createElement("ol");
        this.p15 = createElement("ol");

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
        

        this.title.html("Causes : ")
        this.title.style("color","red")
        this.title.position(100,150);


        this.p11.html("Infection with the new coronavirus (severe acute respiratory syndrome coronavirus 2, or SARS-CoV-2) causes coronavirus disease 2019 (COVID-19).")
        this.p11.position(100,250);

 
        this.p12.html("The virus that causes COVID-19 spreads easily among people, and more continues to be discovered over time about how it spreads. Data has shown that it spreads mainly from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone with the virus coughs, sneezes, breathes, sings or talks. These droplets can be inhaled or land in the mouth, nose or eyes of a person nearby. ")
        this.p12.position(100,300);

 
        this.p13.html("In some situations, the COVID-19 virus can spread by a person being exposed to small droplets or aerosols that stay in the air for several minutes or hours — called airborne transmission. It's not yet known how common it is for the virus to spread this way.")
        this.p13.position(100,370);


        this.p14.html("It can also spread if a person touches a surface or object with the virus on it and then touches his or her mouth, nose or eyes, but the risk is low.")
        this.p14.position(100,430);

 
        this.p15.html("Some reinfections of the virus that causes COVID-19 have happened, but these have been uncommon.")
        this.p15.position(100,490);




    }

    hide(){
        this.title.hide();
        this.p11.hide();
        this.p12.hide();
        this.p13.hide();
        this.p14.hide();
        this.p15.hide();

        this.back.hide();
    }
    
    show(){
        this.title.show();
        this.back.show();
        this.p11.show();
        this.p12.show();
        this.p13.show();
        this.p14.show();
        this.p15.show();

    
    }
   
}