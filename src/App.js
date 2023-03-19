import React from "react";
import { Route, Routes } from "react-router-dom";
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"))
function App() {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/" element = {<DashboardPage></DashboardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
