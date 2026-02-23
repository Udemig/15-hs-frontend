import { useEffect, useState } from "react";
import api from "../../utils/api";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api
      .get("/movie/popular?language=tr")
      .then((res) => {
        const i = Math.round(Math.random() * 19);

        console.log(res.data.results[i]);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>Hero</div>;
};

export default Hero;
