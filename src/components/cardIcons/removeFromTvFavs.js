import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromTvFavsIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromTvFavs = (e) => {
    e.preventDefault();
    context.removeFromTvFavs(tv);
  };
  return (
    <IconButton
      aria-label="remove from tv favorites"
      onClick={handleRemoveFromTvFavs}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavsIcon;