import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [randomItem, setRandomItem] = useState({});
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/data");
        setData(response.data);
        setIsPending(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      reloadDataItem();
    }
  }, [data]);

  const reloadDataItem = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomItem(data[randomIndex]);
  };

  return { data: randomItem, isPending, error, reloadDataItem };
};
