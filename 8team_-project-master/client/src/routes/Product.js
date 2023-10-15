import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import ProductAdd from "../components/product/ProductAdd";
import ProductList from "../components/product/ProductList";
import { authStatusAtom } from "../recoil/atoms/authStatus.atom";
import { getApi } from "../utils/api";

const prefixCls = "app-product";
const wrapperCls = (type) => {
  const mapTypeToCls = {};
  return `${prefixCls}-${mapTypeToCls[type]}`;
};

const ProductItem = () => {
  return <></>;
};

const ProductPage = () => {
  const { isAdmin, isLogin } = useRecoilValue(authStatusAtom);
  const [categories, setCategories] = useState([]);
  const getProdCategory = async () => {
    return await getApi("/api/v1/categories")
      .then((res) => {
        const _categories = res.data.map((item) => ({
          id: item._id,
          title: item.title,
        }));
        setCategories(_categories);
      })
      .catch((err) => {
        console.log({ err });
        alert("카테고리 조회 오류, 새로고침 후 다시 시도해주세요.");
      });
  };

  useEffect(() => {
    getProdCategory();
  }, []);

  const ProdAddTemplate = useMemo(
    () =>
      isAdmin &&
      isLogin &&
      categories.length && <ProductAdd categories={categories} />,
    [categories, isAdmin, isLogin]
  );

  const ProductListTemplate = useMemo(
    () => categories.length && <ProductList categories={categories} />,
    [categories]
  );

  return (
    <div className={""}>
      {isLogin && isAdmin && ProdAddTemplate}
      {ProductListTemplate}
    </div>
  );
};

export default ProductPage;
