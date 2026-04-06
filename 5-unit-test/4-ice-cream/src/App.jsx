import TopNavBar from "./components/TopNavBar/TopNavBar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <TopNavBar cartItemCount={2} />
      <main className="pt-24">
        <Hero />
        <Products />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default App;
