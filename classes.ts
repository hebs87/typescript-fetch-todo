class Vehicle {
  // public - can be called anywhere, any time - default
  // public drive = (): void => {
  //   console.log('vroom vroom');
  // };

  // Define a property with its type
  color: string;

  // This is called when the class is initialised - must specify colour value on initialisation
  constructor(color: string) {
    this.color = color;
  }

  // Another way of initialising color without having to declare it first and then initialise in the constructor
  // Add public to the argument in the constructor
  // constructor(public color: string) {}

  protected honk = (): void => {
    console.log('beep beep');
  };
}

// The extends keyword allows Car to inherit all functionality of Vehicle - we can also redefine methods/properties
class Car extends Vehicle {
  // When adding constructor to a class that inherits a parent class, we need to ensure we pass in the parent class
  // args and initialise them in the super() call, which refers to the parent class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // private - can only be called inside methods within this class - can't be called in the global scope
  // *** CANNOT OVERRIDE TYPE OF METHOD IN PARENT CLASS (PUBLIC/PRIVATE/PROTECTED) ***
  private drive = (): void => {
    console.log('zim zimma');
  };

  startCar = ():void => {
    console.log(this.wheels);
    console.log(this.color);
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

const car = new Car(4, 'black');
// Can't be called as method is private
// car.drive();
car.startCar();
