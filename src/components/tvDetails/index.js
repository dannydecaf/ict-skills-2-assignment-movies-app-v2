import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import TvReviews from '../tvReviews'

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const TvDetails = ({ tvSeries }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography
        variant="h4"
        component="p"
      >
        {tvSeries.name}
      </Typography>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {tvSeries.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper
          component="ul"
          className={classes.chipSet}
        >
          <Chip
            
            label={`${tvSeries.episode_run_time} min`}
          />
          <Chip
            label={`Episodes: ${tvSeries.number_of_episodes}`}
          />
          <Chip
            label={`First Aired: ${tvSeries.first_air_date}`}
          />
        </Paper>

        <Paper
          component="ul"
          className={classes.chipSet}
        >
          <li>
            <Chip
              label="Production Countries"
              className={classes.chipLabel}
            />
          </li>
          {tvSeries.production_countries.map((p) => (
            <li key={p.name}>
              <Chip
                label={p.name}
                className={classes.chip}
              />
            </li>
          ))}
        </Paper>
      </div>
      {}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
      </Drawer>
    </>
  );
};
export default  TvDetails ;
