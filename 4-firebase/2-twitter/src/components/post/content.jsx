const Content = ({ data }) => {
  return (
    <div className="my-2">
      {data.text && <p>{data.text}</p>}

      {data.media && (
        <>
          {data.mediaType === "image" ? (
            <img src={data.media} className="rounded-xl my-2 object-cover max-h-100" />
          ) : data.mediaType === "video" ? (
            <video src={data.media} controls muted className="w-full my-2 rounded-xl" />
          ) : (
            <audio src={data.media} controls muted className="w-full my-2" />
          )}
        </>
      )}
    </div>
  );
};

export default Content;
