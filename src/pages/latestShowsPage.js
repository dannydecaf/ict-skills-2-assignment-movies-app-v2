import React from "react";
import PageTemplate from '../components/templateTvListPage';
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getLatestShows } from "../api/tmdb-api";
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch.js'

const LatestShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('latest', getLatestShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;


  return (
    <PageTemplate
      title='Latest TV Shows'
      shows={shows}
      action={(tv) => {
        return <AddToMustWatchIcon tv={tv} />
      }}
    />
  );
};
export default LatestShowsPage;