import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Derived Data
  const totalUsers = users.length;
  const uniqueCompanies = new Set(users.map((u) => u.company.name)).size;
  const uniqueCities = new Set(users.map((u) => u.address.city)).size;

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-lg font-semibold">
        Loading dashboard...
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-red-500 font-semibold">
        Failed to load data.
      </div>
    );

  return (
    <div className="min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Total Users */}
        <div className="bg-[#222228] rounded-xl shadow p-6">
          <h2 className="text-white text-sm">Total Users</h2>
          <p className="text-3xl font-bold mt-2">{totalUsers}</p>
        </div>

        {/* Unique Companies */}
        <div className="bg-[#222228] rounded-xl shadow p-6">
          <h2 className="text-white text-sm">Total Companies</h2>
          <p className="text-3xl font-bold mt-2">{uniqueCompanies}</p>
        </div>

        {/* Unique Cities */}
        <div className="bg-[#222228] rounded-xl shadow p-6">
          <h2 className="text-text-white text-sm">Cities Covered</h2>
          <p className="text-3xl font-bold mt-2">{uniqueCities}</p>
        </div>

      </div>

      {/* Example Recent Users Section */}
      <div className="mt-10 bg-[#222228] rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <ul className="space-y-3">
          {users.slice(0, 5).map((user) => (
            <li
              key={user.id}
              className="flex justify-between border-b pb-2 text-sm"
            >
              <span>{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
