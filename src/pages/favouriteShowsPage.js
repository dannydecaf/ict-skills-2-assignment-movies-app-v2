import React, { useContext } from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getTv } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromTvFavsIcon from "../components/cardIcons/removeFromTvFavs";


const FavouriteShowsPage = () => {
  const { tvFavs: tvIds } = useContext(MoviesContext);
  
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

  return (
    <TvListPageTemplate
      title="Favourite TV Shows"
      tvseries={shows}
      action={(tv) => {
        return (
          <>
            <RemoveFromTvFavsIcon tv={tv} />
          </>
        );
      }}
    />
  );
};

export default FavouriteShowsPage;