import React, { useState } from "react";
import { postApi } from "../../utils/api";

const prodInputs = [
  { name: "name", placeholder: "상품 이름", type: "text" },
  { name: "summary", placeholder: "상품 요약", type: "text" },
  { name: "description", placeholder: "상품 내용", type: "text" },
  { name: "price", placeholder: "상품 가격", type: "number" },
  { name: "company", placeholder: "상품 제조사", type: "text" },
  { name: "remaining", placeholder: "재고수", type: "number" },
];

const ProductAdd = ({ categories }) => {
  const [prodInfo, setProdInfo] = useState({ image: "", detailImage: "" });
  const [prodFile, setProdFile] = useState(null);

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    setProdInfo((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setProdFile(file);
  };

  const handleSubmit = async () => {
    // let imageUrl = "";
    let image = "https://source.unsplash.com/random/300×300";
    let detailImage = "https://source.unsplash.com/random/300×300";
    // if (prodFile) {
    //   const formData = new FormData();
    //   formData.append("image", prodFile);
    //   const uploadResult = await postApi("api/v1/images/image", formData)
    //     .then((res) => res)
    //     .catch((err) => {
    //       console.log({ err });
    //       return null;
    //     });
    //   console.log({ uploadResult });
    // }
    const resultProdInfo = Object.assign(prodInfo, { image, detailImage });
    console.log(resultProdInfo);
    const registResult = await postApi("api/v1/products", resultProdInfo)
      .then((res) => res)
      .catch((err) => {
        console.log({ err });
        return null;
      });

    if (registResult && !registResult.error) {
      alert("상품 등록 완료");
    }
  };

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <h3>상품등록 (관리자 전용)</h3>
      <select name="category" defaultValue={""} onChange={handleChangeInput}>
        {categories.concat([""]).map?.((category, index) => {
          return (
            <option key={"category" + index.toString()} value={category.title}>
              {category.title}
            </option>
          );
        })}
      </select>
      {prodInputs.map((input, index) => {
        return (
          <input
            key={index.toString()}
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            onChange={handleChangeInput}
          />
        );
      })}
      <input onChange={handleChangeFile} placeholder="상품 사진" type="file" />
      <br />
      <br />
      <button onClick={handleSubmit}>상품 등록</button>
    </div>
  );
};
export default ProductAdd;
