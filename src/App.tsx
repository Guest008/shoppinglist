import "./App.css";
import Product from "./Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingItem from "./components/ShoppingItem/ShoppingItem";
import { useCartShow } from "./useCartShow";
import { useShoppingList } from "./useShoppingList";
function App() {
  const {
    state: cartDisplayState,
    show: cartShow,
    hide: cartHide,
  } = useCartShow();

  const availableProducts = [
    new Product(
      "Ibanez RGA42FM-TGF",
      "Electric Guitars",
      "Ibanez",
      359,
      "/assets/img/1.jpg",
      true
    ),
    new Product(
      "Charvel Pro-Mod DK24 HH HT E DS",
      "Electric Guitars",
      "Charvel",
      855,
      "/assets/img/2.jpg",
      true
    ),
    new Product(
      "Sterling by Music Man Petrucci Majesty 6 AD",
      "Electric Guitars",
      "Music Man",
      1222,
      "/assets/img/3.jpg",
      true
    ),
    new Product(
      "Boss SD-1 Overdrive",
      "Guitar & Bass Effects",
      "Boss",
      59,
      "/assets/img/4.jpg",
      true
    ),
    new Product(
      "HeadRush FRFR-112",
      "1x12 Guitar Cabs",
      "HeadRush",
      299,
      "/assets/img/5.jpg",
      false
    ),
  ];

  const {
    state: cartProducts,
    add: addToCart,
    remove: removeFromCart,
    getTotalPrice: totalPrice,
  } = useShoppingList();

  const addToCartItem = (item: any) => {
    addToCart(item);
  };

  const removeFromCartItem = (index: number) => {
    removeFromCart(index);
  };

  return (
    <div className="App">
      <div id="main-container">
        <ul id="list-of-items">
          {availableProducts.map((elem: any, index: number) => (
            <ShoppingItem
              key={index}
              name={elem.name}
              category={elem.category}
              subject={elem.subject}
              price={elem.price}
              imgPath={elem.imgPath}
              inStock={elem.inStock}
              addToCart={addToCartItem}
            />
          ))}
        </ul>
        <div id="cart-btn" onMouseEnter={cartShow} className={cartDisplayState ? "active" : ""}>
          <h4 className="cart-btn-counter-badge">
            {cartProducts.length > 0 ? cartProducts.length : ""}
          </h4>
          <svg
            fill="#151515"
            version="1.1"
            id="Capa_1"
            width="30px"
            height="30px"
            viewBox="0 0 902.86 902.86"
          >
            <g>
              <g>
                <path
                  d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                />
                <path
                  d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                S619.162,694.432,619.162,716.897z"
                />
              </g>
            </g>
          </svg>
        </div>
        <ShoppingCart
          cartDisplayState = {cartDisplayState}
          cartProducts={cartProducts}
          removeFromCart={removeFromCartItem}
          totalPrice={totalPrice}
          cartHide = {cartHide}
        />
      </div>
    </div>
  );
}

export default App;
