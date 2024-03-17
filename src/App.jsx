import {useState} from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import swal from "sweetalert";

function App() {
  const [carts, setCarts] = useState([]);

  const handleAddToCart = (card) => {
    const isExist = carts.find((item) => item.id === card.id);
    if (isExist) {
      swal({
        title: "Sorry!",
        text: "This card already selected!",
        icon: "warning",
      });
      return;
    }
    setCarts([...carts, card]);
  };

  const handleDelete = (id) => {
    const newArray = carts.filter((item) => item.id !== id);
    setCarts(newArray);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header></Header>
      <div className="flex justify-between">
        <Cards handleAddToCart={handleAddToCart}></Cards>
        <Cart carts={carts} handleDelete={handleDelete}></Cart>
      </div>
    </div>
  );
}

export default App;
