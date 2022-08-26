import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import TemplateActorPage from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api'
import ActorInfo from "../components/actorInfo";
import Spinner from '../components/spinner';

const ActorInfoPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {actor ? (
        <>
          <TemplateActorPage actor={actor}>
            <ActorInfo actor={actor} />
          </TemplateActorPage>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};
export default ActorInfoPage;