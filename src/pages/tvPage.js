import React from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTv} from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

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
      return <AddToFavouritesIcon tv={tv} />;
      }}
    />
  );
};
export default TvShowPage;