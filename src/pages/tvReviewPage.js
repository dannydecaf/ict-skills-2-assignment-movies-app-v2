import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateTvPage";
import TvReview from "../components/tvReview";

const TvReviewPage = (props) => {
  const { state : {tv, review } } = useLocation()
  return (
    <PageTemplate tv={tv}>
      <TvReview review={review} />
    </PageTemplate>
  );
};

export default TvReviewPage;
