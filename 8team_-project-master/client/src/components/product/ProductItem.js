import React from "react";

const ProductItem = ({ prod }) => {
  return (
    <>
      <div className={"app-product-item"}>
        <img
          className={"app-product-item image"}
          src={prod.image}
          alt={prod.title}
        />
        <div className={"app-product-item title"}>상품명: {prod.name}</div>
        <div className={"app-product-item summary"}>요약: {prod.summary}</div>
        <div className={"app-product-item price"}>
          {Number(prod.price).toLocaleString() + "원"}
        </div>
        <div
          className={"app-product-item remaining"}
        >{`재고 - ${prod.remaining}`}</div>
      </div>
    </>
  );
};
export default ProductItem;
