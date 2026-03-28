import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={book.image} alt={book.title} className="card-img-top" />

      <div className="card-body d-flex flex-column gap-2">
        <h3 className="card-title fs-4 fw-semibold">{book.title}</h3>

        <p className="card-text fw-semibold mb-2">{book.author}</p>

        <Link
          to={`/ürünler/${book.id}`}
          className="btn btn-dark w-100 mt-auto"
        >
          Detay'a Git
        </Link>
      </div>
    </div>
  );
};

export default Card;
