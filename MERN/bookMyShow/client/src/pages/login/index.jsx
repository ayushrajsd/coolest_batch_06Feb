import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../api/users";

function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        console.log(
          "adding token to local storage",
          localStorage.getItem("token")
        );

        navigate("/");
      } else {
        message.error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hello = (values) => {
    console.log("hello");
  };
  return (
    <>
      <main className="App-header">
        <h1>Login to BookMyShow</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Enter a valid Email" },
              ]}
            >
              <Input type="text" placeholder="Enter your Email"></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input type="password" placeholder="Enter your Password"></Input>
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              New User ? <Link to="/register"> Register Here</Link>
            </p>
            <p>
              Forgot Password ? <Link to="/forgot"> Click Here</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
