import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { Grid } from "@material-ui/core";
import Cast from "../components/cast";


const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
            <Cast />
            </Grid>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;

