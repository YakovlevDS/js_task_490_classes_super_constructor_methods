class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }


// solution 1

  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }


  // solution 2
// class Shark extends Animal {
//     constructor(name, age, status) {
//       super();
//       this.name = name;
//       this.age = age;
//       this.legs = 0;
//       this.status = status;
//       this.species = 'shark';
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(name, age, status) {
//       super();
//       this.name = name;
//       this.age = age;
//       this.status = status;
//       this.legs = 4;
//       this.species = 'cat';
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name, age, status,master='') {
//       super();
//       this.master = master;
//       this.name = name;
//       this.age = age;
//       this.status = status;
//       this.legs = 4;
//       this.species = 'dog';
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//     greetMaster() {
//       return `Hello ${this.master}`;
//     }
//   }

// solution 3



  let example = new Cat("Example", 10, "Happy");
  let example1 = new Shark("Example", 10, "Happy");
  console.log(example.introduce());
  console.log(example1.introduce());
  
