const Docs = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>
      <div className="space-y-10">
        <h1>Belge Sayfası</h1>

        <h2>{slug.join("/")}</h2>
      </div>
    </div>
  );
};

export default Docs;
