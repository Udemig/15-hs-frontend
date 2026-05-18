"use client";

const Error = ({ error }) => {
  return (
    <div className="box">
      <div className="bg-red-50 text-red-500 p-2">
        <span>HATA!: {error.message}</span>
      </div>
    </div>
  );
};

export default Error;
