import { Link, redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Flex } from "antd";
import { useEffect, useState } from "react";
const Navbar = ({ user, handleLogout }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['easy-booking'])

  return (
    <div>
      <Flex justify="space-between" align="center" style={{ paddingTop: 8 }}>
        <Link to="/" className="sm:text-3xl text-xl italic font-mono">EasyBooking</Link>
        {user &&
          <div>
            <span>{user.name} </span>
            <Button type="default" onClick={handleLogout} danger> Logout </Button>
          </div>
        }
        {!user && <Link to="/login"><Button type="default"> Log In </Button></Link>}
      </Flex>
      <Divider  style={{ marginTop: 16, marginBottom: 16 }}/>
    </div>

  )
}

export default Navbar;