export default function ConstructorPrototype() {
  const Car = function (name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    console.log(this, " inside");
  };

  Car.prototype.totalCount = function (update) {
    console.log(this, "inside inside");
    return this.quantity * this.price + update;
  };

  const car1 = new Car("BMW", 100, 2);
  const car2 = new Car("SUZUKI", 101, 3);

  console.log(car1.totalCount(2));

  //   return Car;
  return <div> To See the output Open Console </div>;
}

// module.exports Car;
