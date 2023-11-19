import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register_me } from "@/Services/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: "",
    contact: "",
    student: false,
  });
  const [error, setError] = useState({ email: "", password: "", name: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" });
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" });
      return;
    }
    if (!formData.name) {
      setError({ ...error, name: "Name Field is required" });
      return;
    }

    const data = await register_me(formData);
    if (data.success) {
      toast.success(data.message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full h-screen  bg-gray-200 px-2 -mx-2">
        <div className="flex mb-4  text-center items-center justify-center py-8 px-2mx-auto h-screen lg:py-0 shadow-xl">
          <div className="w-1/2 bg-white rounded-lg shadow dark:border text-black md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-9 space-y-3 md:space-y-9 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Register your account
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your Name
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
                    placeholder="Name"
                    required=""
                  />
                  {error.name && (
                    <p className="text-sm text-red-500">{error.name}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                  {error.email && (
                    <p className="text-sm text-red-500">{error.email}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    required=""
                  />
                  {error.password && (
                    <p className="text-sm text-red-500">{error.password}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    required=""
                  />
                  {error.password && (
                    <p className="text-sm text-red-500">{error.password}</p>
                  )}
                </div>
                <div className="text-left">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                    required=""
                  />
                  {error.password && (
                    <p className="text-sm text-red-500">{error.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-whitebg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center text-white  "
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account{" "}
                  <Link
                    href="/auth/login"
                    className="font-medium text-indigo-600 hover:underline "
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="w-1/6 bg-gray-200"></div>
          <div className="w-2/6 items-center rounded-lg bg-gradient-to-r from-rose-400 to-orange-300 ">
            {/* <div className="text-center">
              <img
                className="mx-auto w-48"
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
              />
              <h4 className=" mt-1 pb-1 text-xl font-semibold">
                We are The Lotus Team
              </h4>
            </div> */}
            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
              <h4 className="mb-6 text-xl font-semibold">
                We are more than just a company
              </h4>
              <p className="text-lg">
              Welcome to the Fresh Farms, where agriculture meets technology for a brighter and more prosperous future. 
              At Fresh Farms, we understand that farmers are the backbone of our nation, and their hard work fuels our economy.
              We are committed to empowering farmers with the tools and knowledge they need to thrive in an ever-evolving agricultural landscape.

              Our journey began with a simple yet powerful idea: to connect farmers with retailers and create a marketplace that enhances accessibility and profitability. 
              Through Fresh Farms, you can directly connect with retailers, negotiate fair prices, and secure markets for your produce. 
              No more intermediaries, no more uncertainties. 
              We are here to bridge the gap between you and the market, making your agricultural endeavors more lucrative and efficient.
              </p>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
      <Footer/>
    </>
  );
}
