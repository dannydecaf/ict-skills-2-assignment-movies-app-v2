import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getSimilarMovies} from '../api/tmdb-api';
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

const SimilarMoviesPage = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['similar', {id: id}], getSimilarMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  
  return (
    <>
      <PageTemplate
        title="Browse Similar Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
    </>
  );
};

export default SimilarMoviesPage;