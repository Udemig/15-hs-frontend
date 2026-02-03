import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";

const Comments = ({ videoId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    setLoading(true);

    const params = { id: videoId, sort_by: "top", geo: "TR", lang: "tr" };

    api
      .get("/comments", { params })
      .then((res) => setComments(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [videoId]);

  if (loading) return <Spinner />;

  if (error) return <Error message={error} />;

  return (
    <div className="my-6">
      <h2 className="text-xl font-bold">{Number(comments.commentsCount).toLocaleString()} Yorum</h2>

      <input
        type="text"
        placeholder="Yorum ekleyiniz"
        className="w-full bg-transparent border-b border-zinc-700 p-2 my-3 outline-none"
      />
    </div>
  );
};

export default Comments;
