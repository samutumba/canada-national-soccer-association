import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages";

export const AppRoutes = () => {
 return (<>
   <BrowserRouter>
   <Routes>
    <Route path={'/'} element={<HomePage />} />
    <Route path={'*'} element={<Navigate to={"/"} />} />
   </Routes>
  </BrowserRouter></>)
}