import React, { useEffect, useState } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

 

  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!res.ok) throw new Error("Error fetching users");
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

  // Search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  // Pagination
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-lg">
        Loading users...
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Failed to load users.
      </div>
    );

  return (
    <div className="min-h-screen bg-black p-6">
    
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border p-2 rounded w-full sm:w-1/2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="border p-2 rounded w-full bg-[#222228] sm:w-40"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-[#222228] rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-500">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Company</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="border-t cursor-pointer hover:bg-gray-500"
                onClick={() => setSelectedUser(user)}
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center bg-[#222228] gap-2 mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-500 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-[#332228] p-6 rounded-xl w-96 relative">
            <button
              className="absolute top-2 right-3 text-gray-500"
              onClick={() => setSelectedUser(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">
              {selectedUser.name}
            </h2>

            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Website:</strong> {selectedUser.website}</p>
            <p><strong>Company:</strong> {selectedUser.company.name}</p>
            <p><strong>City:</strong> {selectedUser.address.city}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
