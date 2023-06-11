import { useContext } from "react";
import { AuthContext } from "../contexts/AuhtContext";

export const useAuth = () => useContext(AuthContext);
