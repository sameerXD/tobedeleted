import React from "react";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img
          src={props.img}
          className="card-img-top img-fluid"
          alt=""
          // height="65%"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            <b>
              ₹ {props.price} {props.unit}
            </b>
          </p>
          <p className="card-text">{props.desc}</p>
          <button
            className="btn btn-warning"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="btn btn-success" href="#popup1">
            {" "}
            Buy Now{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
