import React from "react";
import CastCard from "../castCard";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { getTvCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const TvCast = ( props ) => {
  const { id } = useParams();
  const {  data, error, isLoading, isError }  = useQuery(['tvShowCredits', {id: id}], getTvCredits)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const credits = data;
  
  let castCards = credits.cast.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <CastCard key={a.id} actor={a} />
    </Grid>
  ));
  return castCards;
};

export default TvCast;