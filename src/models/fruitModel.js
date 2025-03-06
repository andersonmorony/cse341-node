class Fruit {
  constructor(name, description, price) {
    this.validateFields(name, description, price);

    this.name = name;
    this.description = description;
    this.price = price;
  }

  validateFields = (name, description, price) => {
    if (!name || !description || !price) {
      throw new Error("Please provide all fields");
    }
  };
}

export default Fruit;
