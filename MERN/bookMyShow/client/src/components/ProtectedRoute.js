import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { GetCurrentUSer } from "../api/users";
import { ShowLoading, HideLoading } from "../redux/loaderSlice";
import { SetUser } from "../redux/userSlice";
import { message, Layout, Menu } from "antd";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navItems = [
    { label: "Home", icon: <HomeOutlined /> },
    {
      label: `${user ? user.name : ""}`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <span
              onClick={() => {
                if (user.role == "admin") {
                  navigate("/admin");
                } else if (user.role == "partner") {
                  navigate("/partner");
                } else {
                  navigate("/profile");
                }
              }}
            >
              My Profile
            </span>
          ),
          icon: <ProfileOutlined />,
        },
        {
          label: (
            <span
              onClick={() => {
                console.log("clicked on logout");
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </span>
          ),
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];
  const { Header, Footer, Sider, Content } = Layout;
  const getValidUser = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetCurrentUSer();
      console.log("response for current user in Protected route", response);
      if (!response.success) {
        message.error(response.message);
        navigate("/login");
      }
      dispatch(SetUser(response.data));
      dispatch(HideLoading());
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    user && (
      <>
        <Layout>
          <Header
            className="d-flex justify-content-between"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
              Book My Show
            </h3>
            <Menu theme="dark" mode="horizontal" items={navItems}></Menu>
          </Header>

          <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
            {children}
          </div>
        </Layout>
      </>
    )
  );
}

export default ProtectedRoute;
