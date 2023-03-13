// DataFetcher.js

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const DataFetcher = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return data;
};

export default DataFetcher;
