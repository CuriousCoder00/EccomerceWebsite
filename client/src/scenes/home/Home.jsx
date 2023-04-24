import MainCarousel from "./MainCarousel";
import Subscribe from "./Subscribe";
import ShoppingList from "./ShoppingList";

const Home = () => {
  return (
    <div classname="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;