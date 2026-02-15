import { useState } from "react";
import { motion } from "framer-motion";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-500 px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name Field */}
          <FloatingInput
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
          />

          {/* Email Field */}
          <FloatingInput
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
          />

          {/* Password Field */}
          <FloatingInput
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:shadow-2xl transition"
          >
            Sign Up
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}

/* Floating Input Component */
function FloatingInput({ label, name, value, onChange, type }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-white transition"
        placeholder={label}
      />
      <label
        className="absolute left-4 top-1 text-sm text-gray-300 transition-all
        peer-placeholder-shown:top-4
        peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-400
        peer-focus:top-1
        peer-focus:text-sm
        peer-focus:text-white"
      >
        {label}
      </label>
    </div>
  );
}
