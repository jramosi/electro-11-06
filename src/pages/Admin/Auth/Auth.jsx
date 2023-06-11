import "./Auth.css";
import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../../assets/img/logo-delpz.png";
import { loginUser } from "../../../api/Auth";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Auth = () => {
  const { login } = useAuth();
  const dedo = true;
  const handleSubmit = async (values) => {
    const { username, password } = values;
    //const data = await loginUser(username, password);
    //console.log(data);
    //login("dasdasdadasdadasdasdasd");
  };

  return (
    <div className="auth d-flex justify-content-center align-items-center vh-100">
      <div>
        <img src={Logo} alt="logo_login" />

        <Card
          className="card-login"
          title={"sa"}
          style={{
            width: 300,
          }}
        >
          <Form onFinish={handleSubmit} autoComplete="off">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Usuario requerido",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Ingrese su usuario"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Contraseña requerida",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Ingrese su contraseña"
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Iniciar Sesion
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default Auth;
