import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="py-10 border-green-400 p-2 border-2 my-10">
      <section className="grid grid-cols-4">
        <Link to="/">
          <button className="px-3 py-2 border rounded "> Home </button>
        </Link>

        <Link to="/number-to-components">
          <button className="px-3 py-2 border rounded ">
            Number To Component (TS)
          </button>
        </Link>

        <Link to="/js/number-to-components">
          <button className="px-3 py-2 border rounded ">
            Number To Component (JS)
          </button>
        </Link>

        <Link to="/js/all-countries">
          <button className="px-3 py-2 border rounded ">
            All Countries (JS)
          </button>
        </Link>

        <Link to="/js/constructor-prototype">
          <button className="px-3 py-2 border rounded ">
            Constructor & Prototype (JS)
          </button>
        </Link>
      </section>
    </div>
  );
}
