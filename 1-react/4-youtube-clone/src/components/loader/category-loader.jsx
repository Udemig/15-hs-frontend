const CategoryLoader = () => {
  // 20 elemana sahip bir dizi oluştur
  const array = new Array(20).fill("furkan");

  return (
    <div className="page">
      <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {array.map((i, key) => (
          <div key={key} className="animate-pulse">
            {/* thumbnail */}
            <div className="w-full bg-grey aspect-video rounded-xl mb-3" />

            {/* video bilgileri */}
            <div className="flex gap-3">
              {/* avatar */}
              <div className="size-14 rounded-full bg-grey" />

              {/* yazi içeriği */}
              <div className="flex-1 space-y-2">
                {/* başlık */}
                <div className="h-4 bg-grey rounded w-full" />
                <div className="h-4 bg-grey rounded w-3/4" />

                {/* kanal ismi */}
                <div className="h-3 bg-grey w-1/3 rounded" />

                {/*  görüntülenme tarih */}
                <div className="flex gap-2">
                  <div className="h-3 bg-grey rounded w-20" />
                  <div className="h-3 bg-grey rounded w-20" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryLoader;
