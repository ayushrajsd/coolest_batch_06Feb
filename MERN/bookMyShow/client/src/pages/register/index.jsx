import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main className="App-header">
        <h1>Register to BookMyShow</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical">
            <Form.Item
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input type="text" placeholder="Enter your Name"></Input>
            </Form.Item>
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
              rules={[
                { required: true, message: "Password is required" },

            ]}
            >
              <Input type="password" placeholder="Enter your Password"></Input>
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmltype="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>Already a user ? <Link to="/login">Login Now</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
