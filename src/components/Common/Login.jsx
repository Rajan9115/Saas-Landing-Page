import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [form, setForm] = useState({username: "",password: ""});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const  handleSubmit = async (e) => {
   try{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        email: form.email,
        password: form.password,
        }),
        });

        const data = await response.json();
            if (response.ok) {
            // Store token in localStorage
            localStorage.setItem("token", data.token);
            console.log("token",data.token)
            console.log("Token saved!");
        }
        console.log(data);

        setForm({
        email: "",
        password: "",
        });

        navigate("/dashboard");
   }catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong!");
    }

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
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

        
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
            Log in
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
