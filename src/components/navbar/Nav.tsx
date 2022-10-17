import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="py-10">
      <section className="grid grid-cols-4">
        <Link to="/">
          <button className="px-3 py-2 border rounded "> Home </button>
        </Link>

        <Link to="/number-to-components">
          {" "}
          <button className="px-3 py-2 border rounded ">
            {" "}
            Number To Component (TS)
          </button>{" "}
        </Link>

        <Link to="/js/number-to-components">
          {" "}
          <button className="px-3 py-2 border rounded ">
            {" "}
            Number To Component (JS)
          </button>{" "}
        </Link>
      </section>
    </div>
  );
}
