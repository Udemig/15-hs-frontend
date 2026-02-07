import { useEffect, useState } from "react";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

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

  console.log(comments);

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

      {comments.data.map((comment, key) => (
        <div key={key} className="flex gap-3 sm:gap-5 items-start px-1 py-2 sm:py-4">
          <img
            src={comment.authorThumbnail?.[0].url}
            alt={comment.authorText}
            className="size-8 rounded-full sm:size-10"
          />

          <div>
            <h5 className="flex gap-2 items-center">
              <span className="font-bold text-sm">{comment.authorText}</span>
              <span className="text-zinc-400 text-sm">{comment.publishedTimeText}</span>
            </h5>

            <p className="whitespace-pre-wrap text-sm my-2">{comment.textDisplay}</p>

            <div className="flex items-center gap-3 mt-2 text-sm">
              <div className="flex items-center gap-1 comment-field">
                <AiOutlineLike />
                <span>{comment.likesCount}</span>
              </div>
              <div className="comment-field">
                <AiOutlineDislike />
              </div>

              <span className="text-sm font-semibold comment-field">yanıtla</span>
            </div>

            {comment.replyCount > 0 && (
              <button className="flex gap-2 items-center rounded-lg px-2 py-1 w-fit text-blue-400 hover:bg-blue-500/20 hover:text-white">
                <IoIosArrowDown />
                <span>{comment.replyCount} yanıt</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
