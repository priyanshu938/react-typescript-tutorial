import React from "react";
import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCart(id: number): void;
}

const Product = ({ product, handleAddToCart }: ProductProps) => {
  return (
    <>
      <div>{product.title}</div>
      <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
    </>
  );
};

export default Product;
