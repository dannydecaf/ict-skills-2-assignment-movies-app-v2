import React from "react";
import TV from "../tvCard/";
import Grid from "@material-ui/core/Grid";

const TvList = (props) => {
  let tvCards = props.tv.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TV key={t.id} tv={t} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;