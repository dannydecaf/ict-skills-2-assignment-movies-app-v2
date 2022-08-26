import React from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTv} from "../api/tmdb-api";
import AddToTvFavouritesIcon from '../components/cardIcons/addToTvFavs';

const TvShowPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTv)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvSeries = data.results;


  return (
    <TvListPageTemplate
    title="Discover TV"
    tvseries={tvSeries}
    action={(tv) => {
      return <AddToTvFavouritesIcon tv={tv} />;
      }}
    />
  );
};
export default TvShowPage;