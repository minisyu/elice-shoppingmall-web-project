import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authStatusAtom } from "../recoil/atoms/authStatus.atom";
import { getApi } from "../utils/api";

const prefixCls = "app-header";
const wrapperCls = (type) => {
  const mapTypeToCls = {
    header: "wrapper",
    rightMenus: "right-menus-wrapper",
    centerMenus: "center-menus-wrapper",
    logo: "logo-wrapper",
  };
  return `${prefixCls}-${mapTypeToCls[type]}`;
};

const navMenus = [
  {
    label: "상품",
    path: "/prod",
  },
];

const AppHeader = ({ isLogin }) => {
  const setAuthStatus = useSetRecoilState(authStatusAtom);
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickLogout = async () => {
    return await getApi("/api/v1/auth/logout")
      .then((res) => {
        if (!res.error) {
          alert("로그아웃 완료.");
          setAuthStatus((prev) => ({
            ...prev,
            isLogin: false,
            isAdmin: false,
          }));
          navigate("/login");
        } else {
          alert("로그아웃 실패, 다시 시도해주세요.");
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("로그아웃 실패, 다시 시도해주세요.");
      });
  };

  const handleClickProfile = () => {};
  const handleClickNav = (path) => {
    navigate(path);
  };

  return (
    <header className={wrapperCls("header")}>
      <div className={wrapperCls("logo")} onClick={handleClickLogo}>
        <img src={"./8team-logo.png"} alt={"8team-logo"} />
      </div>
      <div className={wrapperCls("centerMenus")}>
        <div>
          {navMenus.map((menu, index) => {
            return (
              <div
                key={index.toString()}
                onClick={() => handleClickNav(menu.path)}
              >
                {menu.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className={wrapperCls("rightMenus")}>
        {!isLogin && <div onClick={handleClickLogin}>Login</div>}
        {isLogin && (
          <div>
            <div onClick={handleClickProfile}>Profile</div>
            <div onClick={handleClickLogout}>Logout</div>
          </div>
        )}
      </div>
    </header>
  );
};
export default AppHeader;
