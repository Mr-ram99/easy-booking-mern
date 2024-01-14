import { Link, redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "antd";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['easy-booking'])
  const navigate = useNavigate();

  useEffect(() => {
    setUser(cookies.user);
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('authToken');
    removeCookie('user');
    navigate("/login");
  }
  return (
    <Flex justify="space-between" align="center" style={{ padding: 8 }}>
      <Link to="/" className="sm:text-3xl text-xl italic font-mono">EasyBooking</Link>
      {user &&
        <div>
          <span>{user.name} </span>
          <Button type="default" onClick={handleLogout} danger> Logout </Button>
        </div>
      }
      {!user && <Link to="/login"><Button type="default"> Log In </Button></Link>}
    </Flex>
  )
}

export default Navbar;