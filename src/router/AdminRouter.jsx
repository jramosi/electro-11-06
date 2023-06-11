import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

import Auth from "../pages/Admin/Auth/Auth";
import Users from "../pages/Admin/Users/Users";
import Home from "../pages/Admin/Home/Home";

import { useAuth } from "../hooks/useAuth";

export function AdminRouter() {
  //llamamos del contexto
  const { user } = useAuth();
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth />} />
      ) : (
        <>
          {["/admin", "/admin/home"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Home)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
        </>
      )}
    </Routes>
  );
}
