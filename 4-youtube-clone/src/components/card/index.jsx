import { useState } from "react";
import { Link } from "react-router-dom";
import { PiBroadcastFill } from "react-icons/pi";
import millify from "millify";

const Card = ({ video }) => {
  // mouse card'ın üzerinde mi state'i?
  const [isHover, setIsHover] = useState(false);

  // thumbnail dizisindeki sonununcu elemanı al
  const thumbnail = video?.thumbnail?.at(-1)?.url;
  const richThumbnail = video?.richThumbnail?.at(-1)?.url;

  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="group block"
    >
      {/* Thumbnail */}
      <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-video bg-zinc-900">
        <img src={isHover && richThumbnail ? richThumbnail : thumbnail} className="size-full object-contain" />

        {video.lengthText && (
          <span className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-1 rounded">{video.lengthText}</span>
        )}

        {video.isLive && (
          <span className="absolute bottom-2 right-2 bg-red-600 text-xs px-2 py-1 rounded font-bold flex items-center gap-2">
            <PiBroadcastFill className="text-lg" />
            CANLI
          </span>
        )}
      </div>

      {/* Video Bilgileri */}
      <div className="flex gap-3">
        <img src={video.channelAvatar[0].url} className="size-14 rounded-full" />

        <div className="flex-1 text-zinc-400">
          <h3 className="text-white line-clamp-2 leading-tight font-semibold">{video.title}</h3>

          <p className="my-1">{video.channelTitle}</p>

          <div className="flex items-center gap-1 text-sm">
            <span>{millify(video.viewCount)} görüntülenme</span>
            <span>*</span>
            <span>{video.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
