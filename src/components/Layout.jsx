import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black">
      
      {/* Navbar */}
      <nav className="bg-[#222228] shadow p-4 flex justify-between">
        <div className="flex gap-6 font-semibold">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/settings">Settings</Link>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
