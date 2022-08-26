import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTvData from "./sampleTvData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  name: "TV Show Details Page/tvDetails",
  component: TvDetails,
};

export const Basic = () => <TvDetails tvSeries={SampleTvData} />;

Basic.storyName = "Default";
