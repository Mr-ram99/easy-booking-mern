import { useState, useEffect } from "react";
import axios from 'axios';
import movies from '../assets/movies'
import Movie from "../components/Movie";
import { Flex } from "antd";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Flex wrap="wrap" gap="middle" justify="center" align="center">
        {
          movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />
          })
        }
      </Flex>
    </>
  );
};

export default Home;