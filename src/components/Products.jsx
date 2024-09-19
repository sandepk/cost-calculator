import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            style={{ height: "100px", objectFit: "cover" }}
            src={prod.thumbnail}
            alt={prod.title}
          />
          {cart.some((p) => p.id === products.id) ? (
            <button
              style={{
                border: "1px solid gray",
                backgroundColor: "red",
                borderRadius: "10px",
                padding: "5px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Remove from cart
            </button>
          ) : (
            <button
              style={{
                border: "1px solid gray",
                backgroundColor: "green",
                borderRadius: "10px",
                padding: "5px",
                cursor: "pointer",
                color: "white",
              }}
              onClick ={() =>{
                  dispatch({
                    type: "ADD_TO_CART", 
                    payload: {
                        id: prod.id,
                        title: prod.title,
                        thumbnail: prod.thumbnail,
                        qty: 1,
                        price: prod.price
                    }
                  })
              }}
            >
              Add to Cart
            </button>
          )}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Price: </span>
            <span>$ {prod.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
