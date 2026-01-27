import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="border p-5 rounded">
      <img src={book.image} alt={book.title} />

      <div className="mt-3 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold">{book.title}</h3>

        <p className="font-semibold">{book.author}</p>

        <Link
          to={`/ürünler/${book.id}`}
          className="bg-black text-white w-full p-3 rounded-md text-center hover:brightness-75"
        >
          Detay'a Git
        </Link>
      </div>
    </div>
  );
};

export default Card;
