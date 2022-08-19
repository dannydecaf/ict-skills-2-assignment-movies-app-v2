import React from "react";
import TvCard from "../components/tvCard";
import SampleTV from "./sampleTvData";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTV}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTV, poster_path: undefined };
  return (
    <TvCard
      tv={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";