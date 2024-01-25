import { useState, useEffect } from "react";
import axios from 'axios';
import movies from '../assets/movies'
import MovieCard from "../components/MovieCard";
import { Flex } from "antd";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['easy-booking']);
  const [user, setUser] = useState(cookies.user);

  const handleLogout = async () => {
    setUser(null);
    await removeCookie('authToken');
    await removeCookie('user');
  }
  return (
    <>
      <Navbar
        user={user}
        handleLogout={handleLogout}
      />
      <Flex wrap="wrap" gap="middle" justify="center" align="center">
        {
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })
        }
      </Flex>
    </>
  );
};

export default Home;