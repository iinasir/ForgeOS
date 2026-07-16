import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-2xl font-bold">ForgeOS</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/builder">Builder</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}