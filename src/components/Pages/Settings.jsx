import React, { useEffect, useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [theme, setTheme] = useState("light");

  // Load saved profile + theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    }
  }, []);

  // Save Profile
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify(profile));
    setProfile({name:"",email:""})
    alert("Profile saved successfully!");
  };

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="max-w-xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Settings
        </h1>

        {/* Profile Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
            Profile Settings
          </h2>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="w-full border p-2 rounded dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </form>
        </div>

        {/* Theme Toggle */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
            Appearance
          </h2>

          <div className="flex items-center justify-between">
            <span className="dark:text-gray-300">
              Current Theme: <strong>{theme}</strong>
            </span>

            <button
              onClick={toggleTheme}
              className="bg-gray-800 dark:bg-yellow-400 dark:text-black text-white px-4 py-2 rounded"
            >
              Toggle Theme
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;
