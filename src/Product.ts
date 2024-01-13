class Product {
  name: string;
  category: string;
  subject: string;
  price: number;
  imgPath: string;
  inStock: boolean;

  constructor(
    name: string,
    category: string,
    subject: string,
    price: number,
    imgPath: string,
    inStock: boolean
  ) {
    this.name = name;
    this.category = category;
    this.subject = subject;
    this.price = price;
    this.imgPath = imgPath
    this.inStock = inStock;
  }
}

export default Product;
