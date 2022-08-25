import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TvDetailsPage from "./pages/tvDetailsPage";
import FavouriteShowsPage from "./pages/favouriteShowsPage";
import TvReviewPage from "./pages/tvReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import AddTvReviewPage from './pages/addTvReviewPage';
import MustWatchShowsPage from "./pages/mustWatchShowsPage";
import TvShowPage from "./pages/tvPage";
import TVDetailsPage from "./pages/tvDetailsPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import SimilarTvPage from "./pages/similarTvPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const sample = {
  backdrop_path: "/qqewE3aUi1js0tVvrhWT3znQppY.jpg",
  first_air_date: "2003-09-03",
  first_air_date: "2003-09-03",
  genre_ids: [
    99,
    18
  ],
  id: 90,
  name: "Mayday",
  origin_country: [
    "CA"
  ],
  original_language: "en",
  original_name: "Mayday",
  overview: "Revealing the dark truth that aviation safety improves one crash at a time, Mayday  investigates legendary aviation disasters to find out what went wrong and why.\n\nBased on cockpit voice recorders, accident reports and eyewitness accounts, every episode also features interviews, state-of-the-art CGI and gripping reenactments.",
  popularity: 113.292,
  poster_path: "/sUfJxQarDfBMgmJgsgJqmVP16UU.jpg",
  vote_average: 8.2,
  vote_count: 195
};

const movies = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
        <Routes>
          <Route path="/movies/reviews/form" element={<AddMovieReviewPage/>} />
          <Route path="/movies/reviews/:id" element={<MovieReviewPage/>} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
          <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
          <Route path="/movies/mustwatch" element={<MustWatchMoviesPage/>} />
          <Route path="/movies/:id" element={<MoviePage/>} />
          <Route path="/movies/:id/similar" element={<SimilarMoviesPage/>} />
          <Route path="/tv/reviews/form" element={<AddTvReviewPage/>} />
          <Route path="/tv/reviews/:id" element={<TvReviewPage/>} />
          <Route path="/tv/favourites" element={<FavouriteShowsPage/>} />
          <Route path="/tv/:id" element={<TVDetailsPage/>} />
          <Route path="/tv/:id/similar" element={<SimilarTvPage/>} />
          <Route path="/tv/series" element={<TvShowPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));