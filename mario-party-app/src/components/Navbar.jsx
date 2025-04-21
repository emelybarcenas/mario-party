import { Link } from "react-router-dom";
export default function Navbar() {
    return (
      <div className="fixed top-0 left-0 w-full shadow-gray-200 z-50 shadow-2xs bg-white pt-5">
        <div className="flex justify-center gap-10 py-4">
     <Link to="/">Home</Link> 
     <Link to="/squads">Squads</Link>
     <Link to="/create">Create</Link>
        </div>
      </div>
    );
  }
  