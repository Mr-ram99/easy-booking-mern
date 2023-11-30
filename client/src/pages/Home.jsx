import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="flex mx-3 mt-5 justify-center items-center gap-3">
        <h2 className="text-3xl">Movies</h2>

        {/* {user.isAdmin && ( */}
          <Link
            to="/addMovie"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          >
            Add<i className="fa-solid fa-plus"></i>
          </Link>
        {/* )} */}
      </div>

      {/* <div className="mt-4 flex flex-wrap align-center justify-center gap-10">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div> */}
    </div>
  );
};

export default Home;