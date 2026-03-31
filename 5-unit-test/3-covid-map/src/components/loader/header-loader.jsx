const HeaderLoader = () => {
  return (
    <div className="flex items-center gap-4" data-testid="loader">
      <div className="h-10 w-30 bg-linear-to-r from-gray-200 via-gray-200 to-gray-200 rounded-xl animate-pulse shadow-md" />
      <div className="h-10 w-16 bg-linear-to-r from-gray-200 via-gray-200 to-gray-200 rounded-xl animate-pulse shadow-md" />
    </div>
  );
};

export default HeaderLoader;
