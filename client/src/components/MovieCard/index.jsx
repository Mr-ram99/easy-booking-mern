import React, { useState } from 'react';
import { Card } from 'antd';
import MovieInfoModal from '../MovieInfoModal';
const { Meta } = Card;

const MovieCard = ({ movie }) => {
  const [isMovieInfoModalOpen, setIsMovieInfoModalOpen] = useState(false);
  return (
    <div>
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
        onClick={() => setIsMovieInfoModalOpen(true)}
      >
        <Meta
          title={movie.name}
        />
      </Card>
      <MovieInfoModal movie={movie} isOpen={isMovieInfoModalOpen} setIsMovieInfoModalOpen={setIsMovieInfoModalOpen} />
    </div>
  )
};
export default MovieCard;