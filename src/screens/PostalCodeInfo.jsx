import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import LocationCard from "../components/LocationCard";
import Loading from "./Loading";

const PostalCodeInfo = () => {
  const { postalCode } = useParams();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://api.zippopotam.us/in/${postalCode}`)
        .then((response) => {
          setResponse(response);
        })
        .catch((error) => {
          setError(error);
        });
    }, 1000);
  }, []);


  if (error === null && response === null) return <Loading />;

  if (error !== null || response === null) return <Error error={error} />;

  return <LocationCard locationData={response.data} />;
};

export default PostalCodeInfo;
