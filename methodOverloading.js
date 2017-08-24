//instance of an object can override a specific implementation of a method that is already provided by one of its parents


function A() {
    var c = new C();
	c.modify = function(){
		c.x = 123;
		c.y = 333;
	}
	c.sum();
}

function B() {
    var c = new C();
	c.modify = function(){
		c.x = 999;
		c.y = 333;
	}
	c.sum();
}


C = function () {
   this.x = 10;
   this.y = 20;

   this.modify = function() {
      this.x = 30;
      this.y = 40;
   };
   
   this.sum = function(){
	this.modify();
	console.log("The sum is: " + (this.x+this.y));
   }
}

A();
B();