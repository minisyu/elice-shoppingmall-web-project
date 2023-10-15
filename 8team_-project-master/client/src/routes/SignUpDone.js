import React from "react";
import { useNavigate } from "react-router-dom";
const SignUpDone = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",

      }}
    >
      <form style={{ display: "flex", flexDirection: "column" }}>
        <h1>회원가입 완료</h1>
        <br />

        <button onClick={() => navigate("/Login")}>로그인 하기</button>
      </form>
    </div>
  );
};

export default SignUpDone;
