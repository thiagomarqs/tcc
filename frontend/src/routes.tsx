import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Root } from "./pages/Root";
import { SecretPage } from "./pages/SecretPage";
import { LoginPage } from "./pages/LoginPage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} errorElement={<Navigate to={"/"}/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/paginaProtegida" element={<SecretPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Route>
  )
)