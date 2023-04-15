import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Root } from "./pages/Root";
import { SecretPage } from "./pages/SecretPage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} errorElement={<Navigate to={"/"}/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/paginaProtegida" element={<SecretPage/>}/>
    </Route>
  )
)