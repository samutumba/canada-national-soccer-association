import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage } from "../pages";

export const AppRoutes = () => {
 return (<>
   <BrowserRouter>
   <Routes>
       <Route path={'/'} element={<HomePage />} />
       <Route path={'/login'} element={<SignInPage />} />
       <Route path={'/register'} element={<RegisterPage />} />
    <Route path={'*'} element={<Navigate to={"/"} />} />
   </Routes>
  </BrowserRouter></>)
}