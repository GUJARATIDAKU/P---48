class Form{
    constructor(){    
    
    this.button1 = createButton('Cardio Vascular Disease');
    this.button2 = createButton('Stroke');
    this.button3 = createButton('Asthma');
    this.button4 = createButton('Tuberculosis');
    this.button5 = createButton('Diabetes');
    this.button6 = createButton('Alzheimer');
    this.button7 = createButton('Malaria');
    this.button8 = createButton('Diarrheal Diseases');
    this.button9 = createButton('Corona Virus Disease');
    this.button10 = createButton('Chronic Obstructive Pulmonary Disease');

    
    this.title = createElement('h2');
    this.note1 = createElement('h3');
    
}

hide(){
  this.button1.hide();
  this.button2.hide();
  this.button3.hide();
  this.button4.hide();
  this.button5.hide();
  this.button6.hide();
  this.button7.hide();
  this.button8.hide();
  this.button9.hide();
  this.button10.hide();

  this.note1.hide();
}

show(){
  this.button1.show();
  this.button2.show();
  this.button3.show();
  this.button4.show();
  this.button5.show();
  this.button6.show();
  this.button7.show();
  this.button8.show();
  this.button9.show();
  this.button10.show();

  this.note1.show();
}
    display(){
        this.title.html("Health Assistant");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.note1.html("Click On Any One Button To Know About These Top 10 Trending Diseases");
        this.note1.style("color","blue");
        this.note1.position(displayWidth/2-380,displayHeight/2-280);

  
        this.button1.position(displayWidth/2 - 500, displayHeight/2 - 150);
        this.button1.style('width', '200px');
        this.button1.style('height', '40px');
        this.button1.style("borderWidth","5px");
        
        this.button2.position(displayWidth/2 -250 , displayHeight/2 - 150);
        this.button2.style('width', '200px');
        this.button2.style('height', '40px');
        this.button2.style("borderWidth","5px");
        
        this.button3.position(displayWidth/2 - 0, displayHeight/2 - 150);
        this.button3.style('width', '200px');
        this.button3.style('height', '40px');
        this.button3.style("borderWidth","5px");

        this.button4.position(displayWidth/2 +250 , displayHeight/2 - 150);
        this.button4.style('width', '200px');
        this.button4.style('height', '40px');
        this.button4.style("borderWidth","5px");

        this.button5.position(displayWidth/2 -500 , displayHeight/2 - 50);
        this.button5.style('width', '200px');
        this.button5.style('height', '40px');
        this.button5.style("borderWidth","5px");

        this.button6.position(displayWidth/2 -250 , displayHeight/2 - 50);
        this.button6.style('width', '200px');
        this.button6.style('height', '40px');
        this.button6.style("borderWidth","5px");

        this.button7.position(displayWidth/2 -0 , displayHeight/2 - 50);
        this.button7.style('width', '200px');
        this.button7.style('height', '40px');
        this.button7.style("borderWidth","5px");

        this.button8.position(displayWidth/2 +250 , displayHeight/2 - 50);
        this.button8.style('width', '200px');
        this.button8.style('height', '40px');
        this.button8.style("borderWidth","5px");

        this.button9.position(displayWidth/2 -250 , displayHeight/2 + 50);
        this.button9.style('width', '200px');
        this.button9.style('height', '40px');
        this.button9.style("borderWidth","5px");

        this.button10.position(displayWidth/2 -0 , displayHeight/2 + 50);
        this.button10.style('width', '200px');
        this.button10.style('height', '40px');
        this.button10.style("borderWidth","5px");

    
        this.button1.mousePressed(()=>{
          
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          this.button4.hide();
          this.button5.hide();
          this.button6.hide();
          this.button7.hide();
          this.button8.hide();
          this.button9.hide();
          this.button10.hide();
         
          this.note1.hide();

          gameState = 1;
        });
    
        this.button2.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 2;
          });

          this.button3.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 3;
          });

          this.button4.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 4;
  
          });

          this.button5.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 5;

          });

          this.button6.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 6;

          });

          this.button7.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 7;
  
          });

          this.button8.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();

            gameState = 8;
  
          });

          this.button9.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 9;

          });

          this.button10.mousePressed(()=>{
          
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.button9.hide();
            this.button10.hide();
           
            this.note1.hide();
  
            gameState = 10;

          });
    
      }
    }
