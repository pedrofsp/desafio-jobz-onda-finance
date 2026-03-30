// Core
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white px-4">
      <h1 className="text-7xl font-bold tracking-tight text-white">404</h1>

      <p className="mt-4 text-lg text-gray-400 text-center max-w-md">
        Oops... parece que essa página não existe ou foi movida.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-white text-black px-6 py-3 text-sm font-medium transition hover:bg-gray-200"
      >
        Voltar para Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
