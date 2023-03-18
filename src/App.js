import React from "react";
import { Route, Routes } from "react-router-dom";
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
function App() {
  return (
    <React.Suspense>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
