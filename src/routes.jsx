import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import NotFound from "./pages/not_found";
import Login from "./pages/login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./pages/register";
import Favorites from "./pages/favorites";
import Category from "./pages/category";

export const AppRoutes = ({ user, setUser }) => {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/register" element={<Register setUser={setUser}/>}/>
      <Route element={<ProtectedRoute isAllowed={user}  />}>
        <Route path="/" element={<Main setUser={setUser} />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites/> }/>
      </Route>
    </Routes>
  );
};

