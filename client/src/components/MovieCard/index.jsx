import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const MovieCard = ({ movie }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="movie"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"
      />
    }
    hoverable={true}
  >
    <Meta
      title={movie.name}
    />
  </Card>
);
export default MovieCard;