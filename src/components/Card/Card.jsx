const Card = ({card, handleAddToCart}) => {
  const {title, price, description, category, image} = card;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-100% h-60" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-semibold">
          {title.slice(0, 24)}
        </h2>
        <p className="text-justify">
          {description.slice(0, 100)} ...{" "}
          <span className="text-green-400">Read more</span>
        </p>
        <div className="flex items-center gap-20">
          <h3 className="text-2xl font-semibold">{category}</h3>
          <p>{price}$</p>
        </div>
        <div className="card-actions w-full">
          <button
            onClick={() => handleAddToCart(card)}
            className="btn btn-accent w-full hover:bg-green-600 text-white font-semibold"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
