import React from "react";
import TvListPageTemplate from "../components/templateTvListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getSimilarTv} from '../api/tmdb-api';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>  ({
  similarStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1.5),
    margin: 0,
  },
}));

const SimilarTvPage = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['similar', {id: id}], getSimilarTv);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;
  
  return (
    <>
      <TvListPageTemplate
        title="Browse Similar TV Shows"
        tvseries={shows}
        action={(tv) => {
          return <AddToFavouritesIcon tv={tv} />
        }}
      />
    </>
  );
};

export default SimilarTvPage;