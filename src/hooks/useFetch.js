import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(url);
        const articlesWithId = response.data.articles.map((article, index) => ({ ...article, id: index + 1})); 
        setData(articlesWithId);
      } catch (error) {
        setError(error.message || "An Error Occurred while fetching data");
      }finally{
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
