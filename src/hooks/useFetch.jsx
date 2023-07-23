import { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  const urls = "";
  const headers = {"X-Token": ""}
  
  useEffect(() => {
    setTimeout(() => {
      fetch(urls, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return { data, isPending, error };
};
