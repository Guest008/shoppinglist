class CartProduct {
  name: string;
  subject: string;
  price: number;
  imgPath: string;

  constructor(
    name: string,
    subject: string,
    price: number,
    imgPath: string,
  ) {
    this.name = name;
    this.subject = subject;
    this.price = price;
    this.imgPath = imgPath
  }
}

export default CartProduct;
