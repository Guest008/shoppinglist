import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import "./ShoppingCart.css";
const ShoppingCart = (props: any) => {
  let items = props.cartProducts;
  return (
    <div id="shopping-cart-container"  className={props.cartDisplayState ? "show" : ""} onMouseLeave={props.cartHide}>
      <ul id="shopping-cart">
        {(() => {
          if (items.length > 0) {
            return items.map((elem: any, index: number) => (
              <ShoppingCartItem
                key={index}
                name={elem.name}
                subject={elem.subject}
                price={elem.price}
                imgPath={elem.imgPath}
                removeFromCart={props.removeFromCart}
              />
            ));
          } else {
            return <div>No items in the cart</div>;
          }
        })()}
      </ul>
      <div id="shopping-cart-submit-line">
        <h2 id="shopping-cart-submit-line-total">Total: £{props.totalPrice()}</h2>
        <div id="shopping-cart-submit-line-purchase-btn">PURCHASE</div>
      </div>
    </div>
  );
};

export default ShoppingCart;
