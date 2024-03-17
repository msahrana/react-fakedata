import {useEffect} from "react";
import {useState} from "react";
import Card from "../Card/Card";

const Cards = ({handleAddToCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((card) => (
        <Card
          key={card.id}
          handleAddToCart={handleAddToCart}
          card={card}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
