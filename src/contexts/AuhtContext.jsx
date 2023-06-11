import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("token");
      //await login(accessToken);
      //pasar usuario decodificado
      //revisar
      //setUser(accessToken);

      setLoading(false);
    })();

    //para quitar
    //localStorage.removeItem("token")
  }, []);

  const login = async (accessToken) => {
    try {
      setToken(accessToken);
      localStorage.setItem("token", accessToken);
      // console.log(accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  //todo lo que podremos usar, para aumentar datos solo hay que meterlo en data
  const data = {
    accessToken: token,
    user,
    login,
  };
  if (loading) return null;
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
