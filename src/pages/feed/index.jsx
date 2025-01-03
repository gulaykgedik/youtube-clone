import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import Card from "../../components/card";
import Error from "../../components/error";
import Loader from "../../components/loader";

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);

  const [params] = useSearchParams();
  const selected = params.get("category");

  useEffect(() => {
    setVideos(null);

    const url = !selected
      ? "/home"
      : selected === "trending"
      ? "/trending"
      : `/search?query=${selected}`;

    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message));
  }, [selected]);

  return (
    <div className="flex pt-16">
      <Sidebar />
      <div className="videos w-full">
        {error ? (
          <Error msg={error} />
        ) : !videos ? (
          <Loader />
        ) : (
          videos.map((i, key) => <Card key={key} item={i} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
