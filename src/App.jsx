import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ClientRouter, AdminRouter } from "./router";
import { AuthProvider } from "./contexts/AuhtContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ClientRouter />
        <AdminRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
