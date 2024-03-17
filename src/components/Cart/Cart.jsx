const Cart = ({carts, handleDelete}) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold pb-4">
        Selected Cart: {carts.length}
      </h1>
      <div>
        <ul className="list-decimal space-y-3 font-medium">
          {carts.map((item, idx) => (
            <li key={idx}>
              {item.title.slice(0, 20)} {item.price}
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
