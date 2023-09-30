import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import PlaylistPage from "./pages/playlist_page";
import NotFound from "./pages/not_found";
import Login from "./pages/login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./pages/registration";
import MyPlayList from "./pages/my_playlist";

export const AppRoutes = ({ user }) => {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />}/>
      <Route element={<ProtectedRoute isAllowed={user} />}>
        <Route path="/" element={<Main />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
        <Route path="/my_playlist" element={<MyPlayList/> }/>
      </Route>
    </Routes>
  );
};

