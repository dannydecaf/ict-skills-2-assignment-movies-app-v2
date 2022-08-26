
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToTvFavsIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleAddToTvFavs = (e) => {
    e.preventDefault();
    context.addToTvFavs(tv);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToTvFavs}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvFavsIcon;