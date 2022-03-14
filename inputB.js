class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(100,320);
        this.button4.style('background', 'lightgrey');

        this.access4 = createInput("Code1")
        this.access4.position(100,290);
        this.access4.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(100,320);
        this.button5.style('background', 'lightgrey');

        this.access5 = createInput("Code1")
        this.access5.position(100,290);
        this.access5.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(100,320);
        this.button6.style('background', 'lightgrey');

        this.access6 = createInput("Code1")
        this.access6.position(100,290);
        this.access.style('background', 'white');  

        this.button7 = createButton('Check');
        this.button7.position(100,320);
        this.button7.style('background', 'lightgrey');

        this.access7 = createInput("Code1")
        this.access7.position(100,290);
        this.access7.style('background', 'white');  

        this.button8 = createButton('Check');
        this.button8.position(100,320);
        this.button8.style('background', 'lightgrey');

        this.access8 = createInput("Code1")
        this.access8.position(100,290);
        this.access8.style('background', 'white');  

        this.button9 = createButton('Check');
        this.button9.position(100,320);
        this.button9.style('background', 'lightgrey');


        this.access10 = createInput("Code1")
        this.access10.position(100,290);
        this.access10.s('background', 'white');  

        this.button10 = createButton('Check');
        this.button10.position(100,320);
        this.button10.style('background', 'lightgrey');

        


        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });


         this.button3.mousePressed(() => {
             if(system.authenticate(accessCode3,this.access3.value())){
                 this.button3.hide();
                 this.access3.hide();
                 score++;
            }
        });
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
           }
       });
       this.button3.mousePressed(() => {
        if(system.authenticate(accessCode5,this.access5.value())){
            this.button3.hide();
            this.access3.hide();
            score++;
       }
   });
   this.button3.mousePressed(() => {
    if(system.authenticate(accessCode6,this.access6.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
   }
});
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode7,this.access7.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
   }
});
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode8,this.access8.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
   }
});
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode9,this.access9.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
   }
});
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode10,this.access10.value())){
        this.button3.hide();
        this.access3.hide();
        score++;
   }
});

    }
}