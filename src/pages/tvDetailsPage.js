import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import TemplateTvPage from "../components/templateTvPage";
import { getTVSeriesDetails} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TvCast from "../components/tvCast";
import { Grid } from "@material-ui/core";

const TVDetailsPage = () => {
  const { id } = useParams();
  const {
    data: tvSeries,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", { id: id }], getTVSeriesDetails);


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvSeries ? (
        <>
          <TemplateTvPage tvSeries={tvSeries}>
            <TvDetails tvSeries={tvSeries} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
              <TvCast />
            </Grid>
          </TemplateTvPage>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TVDetailsPage;
