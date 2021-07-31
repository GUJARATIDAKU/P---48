var form,form1;
var gameState = 0;

function preload() {


}

function setup(){
    createCanvas(1000,800);
    
form = new Form();
form1 = new Form1();
form2 = new Form2();
form3 = new Form3();
form4 = new Form4();
form5 = new Form5();
form6 = new Form6();
form7 = new Form7();
form8 = new Form8();
form9 = new Form9();
form10 = new Form10();

b1f1 = new B1F1();
b1f2 = new B1F2();
b1f3 = new B1F3();
b1f4 = new B1F4();

b2f1 = new B2F1();
b2f2 = new B2F2();
b2f3 = new B2F3();
b2f4 = new B2F4();

b3f1 = new B3F1();
b3f2 = new B3F2();
b3f3 = new B3F3();
b3f4 = new B3F4();

 b4f1 = new B4F1();
 b4f2 = new B4F2();
 b4f3 = new B4F3();
 b4f4 = new B4F4();

 b5f1 = new B5F1();
 b5f2 = new B5F2();
 b5f3 =new B5F3();
 b5f4 = new B5F4();

 b6f1 = new B6F1();
 b6f2 = new B6F2();
 b6f3 = new B6F3();
 b6f4 = new B6F4();

 b7f1 = new B7F1();
 b7f2 = new B7F2();
 b7f3 = new B7F3();
 b7f4 = new B7F4();

 b8f1 = new B8F1();
 b8f2 = new B8F2();
 b8f3 = new B8F3();
 b8f4 = new B8F4();

 b9f1 = new B9F1();
 b9f2 = new B9F2();
 b9f3 = new B9F3();
 b9f4 = new B9F4();


 b10f1 = new B10F1();
 b10f2 = new B10F2();
 b10f3 = new B10F3();
 b10f4 = new B10F4();

}

function draw() {

    background(255);
   
    if(gameState === 0){
        form.show();
        form.display();
        
        form1.hide();
        form2.hide();
        form3.hide();
        form4.hide();
        form5.hide();
        form6.hide();
        form7.hide();
        form8.hide();
        form9.hide();
        form10.hide();  
        
        b1f1.hide();
        b1f2.hide();
        b1f3.hide();
        b1f4.hide();
        b2f1.hide();
        b2f2.hide();
        b2f3.hide();
        b2f4.hide();

        b3f1.hide();
        b3f2.hide();
        b3f3.hide();
        b3f4.hide();

        b4f1.hide();
        b4f2.hide();
        b4f3.hide();
        b4f4.hide();

        b5f1.hide();
        b5f2.hide();
        b5f3.hide();
        b5f4.hide();

        b6f1.hide();
        b6f2.hide();
        b6f3.hide();
        b6f4.hide();

        b7f1.hide();
        b7f2.hide();
        b7f3.hide();
        b7f4.hide();

        b8f1.hide();
        b8f2.hide();
        b8f3.hide();
        b8f4.hide();

        b9f1.hide();
        b9f2.hide();
        b9f3.hide();
        b9f4.hide();

        b10f1.hide();
        b10f2.hide();
        b10f3.hide();
        b10f4.hide();









 
        
    }
   if(gameState === 1){
       form.hide();
       form1.show();
       form1.display();
       form2.hide();
       form3.hide();
       form4.hide();
       form5.hide();
       form6.hide();
       form7.hide();
       form8.hide();
       form9.hide();
       form10.hide();
   }

   if(gameState === 2){
    form.hide();
    form2.show();
    form2.display();
    
    form1.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 3){
    form.hide();
    form3.show();
    form3.display();
    form1.hide();
    form2.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 4){
    form.hide();
    form4.show();
    form4.display();
    form1.hide();
    form2.hide();
    form3.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 5){
    form.hide();
    form5.show();
    form5.display();
    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 6){
    form.hide();
    form6.show();
    form6.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 7){
    form.hide();
    form7.show();
    form7.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form8.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 8){
    form.hide();
    form8.show();
    form8.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form9.hide();
    form10.hide();
}

if(gameState === 9){
    form.hide();
    form9.show();
    form9.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form10.hide();
}

if(gameState === 10){
    form.hide();
    form10.show();
    form10.display();

    form1.hide();
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    
    b1f1.hide();
    b1f2.hide();
    b1f3.hide();
    b1f4.hide();

    b2f1.hide();
    b2f2.hide();
    b2f3.hide();
    b2f4.hide();

    b3f1.hide();
    b3f2.hide();
    b3f3.hide();
    b3f4.hide();

    b4f1.hide();
    b4f2.hide();
    b4f3.hide();
    b4f4.hide();

    b5f1.hide();
    b5f2.hide();
    b5f3.hide();
    b5f4.hide();

    b6f1.hide();
    b6f2.hide();
    b6f3.hide();
    b6f4.hide();

    b7f1.hide();
    b7f2.hide();
    b7f3.hide();
    b7f4.hide();

    b8f1.hide();
    b8f2.hide();
    b8f3.hide();
    b8f4.hide();

    b9f1.hide();
    b9f2.hide();
    b9f3.hide();
    b9f4.hide();
    
    b10f1.hide();
    b10f2.hide();
    b10f3.hide();
    b10f4.hide();
















}


if(gameState === 11){
    form.hide();
    form1.hide();
    b1f1.display();

     b1f1.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 12){
    form.hide();
    form1.hide();
    b1f1.hide();
    b1f2.display();
    b1f2.show()

    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 13){
    form.hide();
    form1.hide();
   
    b1f2.hide();
    b1f3.display();
    b1f3.show();

    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 14){
    form.hide();
    form1.hide();
   
    b1f3.hide();
    b1f4.display();
    b1f4.show()

    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 21){
    form.hide();
    form1.hide();
   
    
    b2f1.display();
    b2f1.show();
    
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 22){
    form.hide();
    form1.hide();
   
    b2f1.hide();
    b2f2.display();
    b2f2.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}


if(gameState === 23){
    form.hide();
    form1.hide();
   
    b2f2.hide();
    b2f3.display();
    b2f3.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 24){
    form.hide();
    form1.hide();
   
    b2f3.hide();
    b2f4.display();
    b2f4.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 31){
    form.hide();
    form1.hide();
   
    
    b3f1.display();
    b3f1.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 32){
    form.hide();
    form1.hide();
   
    b3f1.hide();
    b3f2.display();
    b3f2.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 33){
    form.hide();
    form1.hide();
   
    b3f2.hide();
    b3f3.display();
    b3f3.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 34){
    form.hide();
    form1.hide();
   
    b3f3.hide();
    b3f4.display();
    b3f4.show();
  
    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 41){
 form.hide();
     form1.hide();
   
   
    b4f1.display();
    b4f1.show();
  
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
    form8.hide();
     form9.hide();
     form10.hide();  
 }

 if(gameState === 42){
     form.hide();
     form1.hide();
   
     b4f1.hide();
     b4f2.display();
     b4f2.show();
  
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
     form8.hide();
     form9.hide();
     form10.hide();  
 }

 if(gameState === 43){
     form.hide();
     form1.hide();
   
     b4f2.hide();
     b4f3.display();
     b4f3.show();
  
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
     form8.hide();
     form9.hide();
     form10.hide();  
 }

 if(gameState === 44){
     form.hide();
     form1.hide();
   
     b4f3.hide();
     b4f4.display();
     b4f4.show();
 
     form2.hide();
     form3.hide();
     form4.hide();
     form5.hide();
     form6.hide();
     form7.hide();
     form8.hide();
     form9.hide();
     form10.hide();  
}

if(gameState === 51){
    form.hide();
    form1.hide();
  

    b5f1.display();
    b5f1.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 52){
    form.hide();
    form1.hide();
  

    b5f1.hide();
    b5f2.display();
    b5f2.show();

    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 53){
    form.hide();
    form1.hide();
  

    b5f2.hide();
    b5f3.display();
    b5f3.show();

    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 54){
    form.hide();
    form1.hide();
  

    b5f3.hide();
    b5f4.display();
    b5f4.show();

    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 61){
    form.hide();
    form1.hide();
  

    b6f1.display();
    b6f1.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 62){
    form.hide();
    form1.hide();
  
    b6f1.hide();
    b6f2.display();
    b6f2.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 63){
    form.hide();
    form1.hide();
  
    b6f2.hide();
    b6f3.display();
    b6f3.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 64){
    form.hide();
    form1.hide();
  
    b6f3.hide();
    b6f4.display();
    b6f4.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 71){
    form.hide();
    form1.hide();
  
   
    b7f1.display();
    b7f1.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 72){
    form.hide();
    form1.hide();
  
    b7f1.hide();
    b7f2.display();
    b7f2.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 73){
    form.hide();
    form1.hide();
  
    b7f2.hide();
    b7f3.display();
    b7f3.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 74){
    form.hide();
    form1.hide();
  
    b7f3.hide();
    b7f4.display();
    b7f4.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 81){
    form.hide();
    form1.hide();
  
   
    b8f1.display();
    b8f1.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 82){
    form.hide();
    form1.hide();
  
    b8f1.hide();
    b8f2.display();
    b8f2.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 83){
    form.hide();
    form1.hide();
  
    b8f2.hide();
    b8f3.display();
    b8f3.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 84){
    form.hide();
    form1.hide();
  
    b8f3.hide();
    b8f4.display();
    b8f4.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 91){
    form.hide();
    form1.hide();
  
    
    b9f1.display();
    b9f1.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 92){
    form.hide();
    form1.hide();
  
    b9f1.hide();
    b9f2.display();
    b9f2.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 93){
    form.hide();
    form1.hide();
  
    b9f2.hide();
    b9f3.display();
    b9f3.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 94){
    form.hide();
    form1.hide();
  
    b9f3.hide();
    b9f4.display();
    b9f4.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 101){
    form.hide();
    form1.hide();
  
    
    b10f1.display();
    b10f1.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 102){
    form.hide();
    form1.hide();
  
    b10f1.hide();
    b10f2.display();
    b10f2.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 103){
    form.hide();
    form1.hide();
  
    b10f2.hide();
    b10f3.display();
    b10f3.show();


    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}

if(gameState === 104){
    form.hide();
    form1.hide();
  
    b10f3.hide();
    b10f4.display();
    b10f4.show();



    form2.hide();
    form3.hide();
    form4.hide();
    form5.hide();
    form6.hide();
    form7.hide();
    form8.hide();
    form9.hide();
    form10.hide();  
}


     }




