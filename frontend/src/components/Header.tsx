import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-teal-700 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-normal">
          <Link to="/">Naboo.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex bg-white items-center text-teal-700 px-3 font-bold hover:bg-teal-100 "
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;