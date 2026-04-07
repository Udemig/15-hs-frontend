import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalCount } from "./store/basketSlice";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import BasketDrawer from "./components/BasketDrawer/BasketDrawer";

const App = () => {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const totalCount = useSelector(selectTotalCount);

  return (
    <>
      <TopNavBar cartItemCount={totalCount} onCartClick={() => setIsBasketOpen(true)} />
      <main className="pt-24">
        <Hero />
        <Products />
        <Features />
      </main>
      <Footer />
      <BasketDrawer isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)} />
    </>
  );
};

export default App;
