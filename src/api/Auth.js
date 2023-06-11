import axios from "axios";
import querystring from "query-string";
import CONFIG from "../constants/Config";
import ENDPOINT from "../constants/EndPoints";

//import { formatResponseSuccessAuth } from "../util/apiResponseRequest";

//para loguearse
export const loginUser = async (username = "", password = "") => {
  const data = {
    username,
    password,
    grant_type: CONFIG.GRANT_TYPE,
  };
  console.log(querystring.stringify(data));
  try {
    const response = await axios.post(
      ENDPOINT.AUTH,
      querystring.stringify(data),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: CONFIG.BASIC_AUTH,
        },
      }
    );
    //querystring.stringify funcion que crea una cadena consulta URL a partir de un objeto
    //return formatResponseSuccessAuth(response)
    return response;
  } catch (error) {
    let message = "Credenciales Incorrectas";
    if (error.code === "ERR_NETWORK") {
      message = "Error en la conexión";
    }
    return { error: true, access_token: "", message };
  }
};
