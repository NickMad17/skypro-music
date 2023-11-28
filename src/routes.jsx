import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import NotFound from "./pages/not_found";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Category from "./pages/category";

import Login from "./pages/login";
import MyPlayList from "./pages/myPlayList";
import PageLayout from "./components/PageLayout/PageLayout";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login isRegMode={true} />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<PageLayout/>}>
          <Route path="/" element={<Main />} />
          <Route path="/my-playlist" element={<MyPlayList/>}/>
        </Route>
        <Route path="/category/:id" element={<Category />} />
      </Route>
    </Routes>
  );
};

