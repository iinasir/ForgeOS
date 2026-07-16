import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to your ForgeOS account
        </p>

        

        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            Sign In
          </button>

        </form>

        <div className="flex justify-center my-8">
  <button
    className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
  >
    <FcGoogle size={28} />
  </button>
</div>

<div className="flex items-center my-6">
  <div className="flex-1 h-px bg-gray-300"></div>
  <span className="px-4 text-gray-500 text-sm">OR</span>
  <div className="flex-1 h-px bg-gray-300"></div>
</div>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-black"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}