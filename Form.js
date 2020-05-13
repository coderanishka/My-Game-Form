class Form{
  constructor(){
      this.name = createInput("Name");
      this.greeting = createElement("h2");
      this.game1 = createButton("Play");
      this.game2 = createButton("Play");
      this.title = createElement("h1")
      this.submit = createButton("Submit");
  }

//For the ocean..
//Aquatic Saving..
//trash hunter..
//call of the sea..
  display(){
        //this.image.position(10,10);
       // this.image.size(500,500);
        this.title.html("CALL OF THE SEA");
        this.title.position(150,20)
        this.name.position(180,150);
        this.game1.position(300,410);
        this.game2.position(300,650);
        this.submit.position(380,150);
        
        this.submit.mousePressed(()=>{
          this.submit.hide();
          this.name.hide();
          var name = this.name.value();
          this.greeting.html("Welcome "+ name);
          this.greeting.position(220,100);
        })
           
        
  }


}
  