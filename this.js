 //global context: it return the window object, even in strict mode.
 //function context: in strict mode returns undefined , non strict mode retruns window object
    function f1() {
      return this;
    }
    // In a browser:
    f1() === window; // the window is the global object in browsers
    
    function f2() {
      'use strict'; // see strict mode
      return this;
    }

    f2() === undefined;

//  'call' and 'apply' context:
    // An object can be passed as the first argument to call or apply and this will be bound to it.
    var obj = {a: 'Custom'};

    // This property is set on the global object
    var a = 'Global';

    function whatsThis(arg) {
      return this.a;  // The value of this is dependent on how the function is called
    }

    whatsThis();          // Returns 'Global'
    whatsThis.call(obj);  // Returns 'Custom'
    whatsThis.apply(obj); // Returns 'Custom'

//bind method: creates a new function with the same body and scope as f, but where this occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.

    function f() {
      return this.a;
    }

    var g = f.bind({a: 'azerty'});
    console.log(g()); // azerty

    var h = g.bind({a: 'yoo'}); // bind only works once!
    console.log(h()); // azerty

    var o = {a: 37, f: f, g: g, h: h};
    console.log(o.f(), o.g(), o.h()); // 37, azerty, azerty

//Arrow functions: this is set lexically, i.e. it's set to the value of the enclosing execution context's this. 

    var globalObject = this;
    var foo = (() => this);
    console.log(foo() === globalObject); // true

//object Method: this is set to the object the method is called on.

    var o = {
      prop: 37,
      f: function() {
        return this.prop;
      }
    };

    console.log(o.f()); // logs 37

//object's prototype chain: The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, this refers to the object the method was called on, as if the method was on the object.

    var o = {f: function() { return this.a + this.b; }};
    var p = Object.create(o);
    p.a = 1;
    p.b = 4;

    console.log(p.f()); // 5

