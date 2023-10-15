import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authStatusAtom } from "../recoil/atoms/authStatus.atom";
import { getApi } from "../utils/api";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

const whiteListPath = ["/login", "/signup"];

const AppLayout = ({ children }) => {
  const [{ isLogin }, setAuthStatus] = useRecoilState(authStatusAtom);
  const navigate = useNavigate();
  const checkAuthStatus = async () => {
    await getApi("api/v1/auth/verify").catch(async (err) => {
      console.log({ err });
      setAuthStatus((prev) => ({ ...prev, isLogin: false, isAdmin: false }));
      await getApi("/api/v1/auth/logout");
      navigate("/login");
    });
  };

  useEffect(() => {
    if (!whiteListPath.includes(window.location.pathname)) {
      checkAuthStatus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <AppHeader isLogin={isLogin} />
      <main className={"app-main-wrapper"}>{children}</main>
      <AppFooter />
    </>
  );
};
export default AppLayout;
