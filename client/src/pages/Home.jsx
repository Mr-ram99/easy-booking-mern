import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['easy-booking'])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/', {
      withCredentials: true
    }).then((res) => {
      if (res.data.loggedIn) {
        setUser((prev) => prev !== res.data.user);
      }
    })
  }, [user])

  const handleLogout = () => {
    removeCookie('authToken');
    setUser(null);
  }
  return (
    <div className="container">
      <div className="flex mx-3 mt-5 justify-center items-center gap-3">
        {user &&
          <div>
            <p>user loggged in</p>
            <button
            className="inline-block rounded bg-red px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            onClick={handleLogout}
            >
            logout
            </button>
          </div>
        }
        {!user &&
          <div>
            <p>not logged in</p>
            <Link
              to="/login"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Log In
            </Link>
          </div>
        }
        {/* <Link
          to="/addMovie"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Add<i className="fa-solid fa-plus"></i>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;