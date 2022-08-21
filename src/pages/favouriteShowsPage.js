import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteShowsPage = () => {
  const { favourites: tvIds } = useContext(MoviesContext);
  
  // Create an array of queries and run in parallel.
  const favouriteTvQueries = useQueries(
    tvIds.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTv,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((t) => t.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favouriteTvQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite TV Shows"
      shows={shows}
      action={(tv) => {
        return (
          <>
            <RemoveFromFavourites tv={tv} />
            <WriteReview tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavouriteShowsPage;