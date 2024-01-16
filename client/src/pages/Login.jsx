import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navbar from "../components/Navbar";
import { notification } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['easy-booking']);
  const [notificationApi, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const openNotification = (message) => {
    notificationApi.info({
      message: message,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    axios.post('http://localhost:3001/users/login', data, {
      withCredentials: true,
    }).then((res) => {
      const resData = res.data;
      if (resData.loggedIn) {
        if (resData.authToken) {
          setCookie('authToken', resData.authToken);
        }
        setCookie('user', resData.user);
        navigate('/');
      }
      else {
        openNotification('some error occurred');
      }
    }).catch((e)=>{
      openNotification('wrong username/password');
    })
  };

  return (
    <>
      <Navbar
        user={cookies.user}
      />
      {contextHolder}
      <div className="max-w-sm mx-auto my-10 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <div className="mb-5 text-4xl text-center font-medium">Login</div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              className="w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <Link
              to="/register"
              className="text-slate-500 underline transition duration-150 ease-in-out hover:text-slate-700"
            >
              Don't have an account? Register here
            </Link>
          </div>

          <button
            type="submit"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;