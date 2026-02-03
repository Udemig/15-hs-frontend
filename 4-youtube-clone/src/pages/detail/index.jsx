import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import ChannelInfo from "./channel-info";
import Description from "./description";
import Comments from "./comments";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    setLoading(true);

    // api'a gönderilecek parametreyi hazırla
    const params = { id, extend: "1", geo: "TR", lang: "tr" };

    // api'dan video verilerini al
    api
      .get("video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;

  if (video.error || error) return <Error message={video.error || error} />;

  return (
    <div className="page flex flex-col lg:flex-row gap-6 mx-auto max-w-400">
      <div className="flex-1">
        {/* Oynatıcı */}
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <ReactPlayer src={`https://www.youtube.com/watch?v=${id}`} width={"100%"} height={"100%"} controls />
        </div>

        {/* Bilgiler */}
        <div className="space-y-4 mt-4">
          <h1 className="text-xl font-bold line-clamp-2 leading-tight">{video.title}</h1>

          <ChannelInfo video={video} />

          <Description video={video} />

          <Comments videoId={id} />
        </div>
      </div>

      <div className="lg:w-100">Önerilenler</div>
    </div>
  );
};

export default Detail;
