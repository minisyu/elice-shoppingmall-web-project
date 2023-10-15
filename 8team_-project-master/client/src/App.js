import React, { lazy, Suspense } from "react";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import SignUp from "./routes/SignUp";
import SignUpDone from "./routes/SignUpDone";
import Category from "./components/Category";

import { Routes, Route } from "react-router-dom";
// import AppLayout from "./common/AppLayout";
import ProductPage from "./routes/Product";
import AppNotFound from "./common/AppNotFound";

const AppLayout = lazy(() => import("./common/AppLayout"));
function App() {
  return (
    <div>
      <Suspense fallback={<h1>페이지 로딩중...</h1>}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signupdone" element={<SignUpDone />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/category" element={<Category />} />
            <Route path="/prod" element={<ProductPage />} />
            <Route path="/*" element={<AppNotFound />} />
          </Routes>
        </AppLayout>
      </Suspense>
    </div>
  );
}

export default App;
