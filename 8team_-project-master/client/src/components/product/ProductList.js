import React, { useEffect, useState } from "react";
import { getApi } from "../../utils/api";
import ProductItem from "./ProductItem";

const setMapCategoryToProds = (prods) => {
  const result = { category: null, prods: null };
  if (prods && prods.length) {
    const category = prods[0].category;
    result.category = category;
    result.prods = prods;
  }
  return result;
};

const ProductList = ({ categories }) => {
  const [prods, setProds] = useState({});
  const setProdList = async () => {
    const result = await Promise.all(
      categories.map?.((category) =>
        getApi(`api/v1/categories/products/${category.title}`).then(
          (res) => res.data.products
        )
      )
    )
      .then((res) => res)
      .catch((err) => {
        console.log({ err });
        return null;
      });
    console.log(result);
    if (result) {
      result?.forEach((prods) => {
        const prodsInfo = setMapCategoryToProds(prods);
        if (prodsInfo.category) {
          setProds((prev) => ({
            ...prev,
            [prodsInfo.category]: prodsInfo.prods,
          }));
        }
      });
    }
  };
  console.log(prods);
  useEffect(() => {
    if (categories && categories.length) {
      setProdList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);
  return (
    <h3>
      상품 리스트
      {Object.keys(prods).length &&
        Object.keys(prods).map((category, index) => {
          return (
            <div className={"app-product-list-block"} key={category}>
              <div className={"app-product-category"}>{category}</div>
              <div className={"app-product-item-list-block"}>
                {prods[category].map?.((prod, index) => (
                  <ProductItem key={prod._id} prod={prod} />
                ))}
              </div>
            </div>
          );
        })}
    </h3>
  );
};
export default ProductList;
