import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
  },
  tagLine: {
    fontSize: "1.5rem",
  },
}));

const TvHeader = (props) => {
  const classes = useStyles();
  const nav = useNavigate();
  const name = props.title;

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => nav(-1)}>
        <ArrowBackIcon style={{ color: "blue" }} fontSize="large" />
      </IconButton>
      <Typography
        variant="h4"
        component="h3"
        style={{ color: "blue", fontSize: 25 }}
      >
        {name}
        <br />
      </Typography>
      <IconButton aria-label="go forward" onClick={() => nav(1)}>
        <ArrowForwardIcon style={{ color: "blue" }} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TvHeader;
