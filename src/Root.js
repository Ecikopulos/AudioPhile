import React, { useEffect, useState } from "react";
import Navigation from "./components/organisms/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import HeadPhones from "./pages/headphones/HeadPhones";
import Footer from "./components/organisms/footer/Footer";
import Speakers from "./pages/speakres/Speakers";
import Earphones from "./pages/earphones/Earphones";
import Xx99two from "./pages/headphones/xx99two/Xx99two";
import Xx99one from "./pages/headphones/xx99one/Xx99one";
import Xx59 from "./pages/headphones/xx59/Xx59";
import Zx9 from "./pages/speakres/zx9/Zx9";
import Zx7 from "./pages/speakres/zx7/Zx7";
import Yx1 from "./pages/earphones/yx1/Yx1";
import Cart from "./components/organisms/cart/Cart";
import { CartContext } from "./context/CartContext";
import Checkout from "./pages/checkout/Checkout";
import FinalPage from "./pages/finalPage/FinalPage";

const Root = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartContent, setCartContent] = useState([]);
  const [fakeActivated, setFakeActivated] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    cartContent.sort((a, b) => {
      if (a.item === b.item) {
        const amount = a.quantity + b.quantity;
        const finalPrice = a.price + b.price;
        const merged = { ...a, ...b };
        merged.quantity = amount;
        merged.price = finalPrice;

        const array = cartContent.filter((product) => product !== a);
        const finalArray = array.filter((product) => product !== b);

        finalArray.push(merged);

        setCartContent(finalArray);
      }
      return 0;
    });
  }, [fakeActivated, cartContent]);

  return (
    <CartContext.Provider
      value={{ cartContent, setCartContent, setFakeActivated }}
    >
      <Navigation setCartIsOpen={setCartIsOpen} />
      {cartIsOpen ? (
        <Cart
          cartContent={cartContent}
          setCartContent={setCartContent}
          fakeActivated={fakeActivated}
          setFakeActivated={setFakeActivated}
          finalPrice={finalPrice}
          setFinalPrice={setFinalPrice}
          setCartIsOpen={setCartIsOpen}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/headphones/xx99two" element={<Xx99two />} />
        <Route path="/headphones/xx99one" element={<Xx99one />} />
        <Route path="/headphones/xx59" element={<Xx59 />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/zx9" element={<Zx9 />} />
        <Route path="/speakers/zx7" element={<Zx7 />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/yx1" element={<Yx1 />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartContent={cartContent}
              setCartContent={setCartContent}
              finalPrice={finalPrice}
            />
          }
        />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
};

export default Root;
