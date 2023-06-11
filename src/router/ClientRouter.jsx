import { Route, Routes } from "react-router-dom";
import ClientLayout from "../layouts/ClientLayout/ClientLayout";
import Home from "../pages/Client/Home/Home";

export function ClientRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, Home)} />
    </Routes>
  );
}
