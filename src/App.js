import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}></Header>
      <main>

        {!showCart && <Meals></Meals>}
        {showCart && <Cart onHideCart={hideCartHandler}></Cart>}

      </main>

    </CartProvider>
  );
}

export default App;
