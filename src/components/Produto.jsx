import { Link } from "react-router-dom";

export default function Produto({ id, name, imagem }) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-green-50">
      <img
        src={imagem}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold text-green-400">{name}</h2>
      <Link
        to={`/produtos/${id}`}
        className="mt-4 inline-block text-sm text-green-500 underline hover:text-green-700"
      >
        Acesse
      </Link>
    </div>
  );
}
