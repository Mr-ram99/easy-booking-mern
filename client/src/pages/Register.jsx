import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['easy-booking'])
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      username,
      email,
      password,
    }
    axios.post('http://localhost:3001/users', data, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
    })
  };

  return (
    <div className="max-w-sm mx-auto my-10 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="mb-5 text-4xl text-center font-medium">Register</div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6" data-te-input-wrapper-init>
          <input
            type="name"
            className="w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6" data-te-input-wrapper-init>
          <input
            type="username"
            className="w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            className="w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
            placeholder="Email"
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
            to="/login"
            className="text-slate-500 underline transition duration-150 ease-in-out hover:text-slate-700"
          >
            Already have an account? Login here
          </Link>
        </div>

        <button
          type="submit"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
