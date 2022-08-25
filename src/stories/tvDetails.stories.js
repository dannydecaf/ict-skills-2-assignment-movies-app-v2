import React from "react";
import TvDetails from "../components/tvDetails";
import SampleTvData from "./sampleTvData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  name: "TV Show Details Page/tvDetails",
  component: TvDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TvDetails tvShow={SampleTvData} />;

Basic.storyName = "Default";
