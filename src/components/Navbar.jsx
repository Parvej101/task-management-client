import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold">Task Manager</Link>
          <div className="md:flex space-x-4 hidden">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-white">☰</button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;