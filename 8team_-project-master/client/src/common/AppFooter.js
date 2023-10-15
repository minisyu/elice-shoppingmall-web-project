import React from "react";
const prefixCls = "app-footer";

const wrapperCls = (type) => {
  const mapTypeToCls = {
    footer: "wrapper",
  };
  return `${prefixCls}-${mapTypeToCls[type]}`;
};

const AppFooter = () => {
  return (
    <footer className={wrapperCls("footer")}>
      <div>Copyright. 8team All rights reserved.</div>
    </footer>
  );
};
export default AppFooter;
