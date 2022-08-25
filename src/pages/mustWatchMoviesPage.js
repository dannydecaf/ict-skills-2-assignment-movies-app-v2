import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";
import WriteReview from "../components/cardIcons/writeReview";
const MustWatchMoviesPage = () => {
  const { mustWatch: movieIds } = useContext(MoviesContext);
  // Create an array of queries and run in parallel.
  const mustWatchQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchQueries.find((m) => m.isLoading === true);
  if (isLoading) {
    return <Spinner />;
  }
  const movies = mustWatchQueries.map((q) => {
    q.data.type = "Movie"
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });
  return (
    < MovieListPageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustWatch movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};
export default MustWatchMoviesPage;