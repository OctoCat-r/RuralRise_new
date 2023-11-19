import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register_me } from "@/Services/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function register2() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    DOB: new Date(),
    contact: 0,
    // address: {
    //   area: "",
    //   city: "",
    //   state: "",
    //   pincode: "",
    // },
    address: "",
    category: "",
  });
  const [address, setAddress] = useState({
    city: "",
    area: "",
    state: "",
    pincode: "",
  });

  const completeAddress =
    address.city +
    "," +
    address.area +
    "," +
    address.state +
    "," +
    "( " +
    address.pincode +
    " )";
  const [error, setError] = useState({ email: "", password: "", name: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, address: completeAddress });

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

    if (!formData.address) {
      setError({ ...error, name: "Address Field is required" });
      return;
    }
    if (!formData.category) {
      setError({ ...error, name: "Category Field is required" });
      return;
    }
    console.log(formData);

    const data = await register_me(formData);

    if (data.success) {
      toast.success(data.message);
      alert("success");
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } else {
      toast.error(data.message);
      alert(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex  justify-center p-12 px-2 -mx-2 items-start ">
        {/* Author: FormBold Team */}
        {/* Learn More: https://formbold.com */}
        <br></br>
        <div className="mx-auto  max-w-[550px] bg-gray-100 flex flex-col text-center items-center justify-center px-6 py-9 w-full md:w-1/2 rounded-lg shadow dark:border margin-top: 1px ">
          <br></br>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-400 hover:text-sky-400 md:text-4xl ">
            Register with us
          </h1>
          <br></br>
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
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
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    DOB
                  </label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, DOB: e.target.value })
                    }
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Category
                  </label>
                  {/* <input
                  type="text"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md items-center"
                /> */}

                  <select
                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option>Select Category</option>
                    <option>General</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>OBC</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          area: e.target.value,
                        })
                      }
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          city: e.target.value,
                        })
                      }
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          state: e.target.value,
                        })
                      }
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      onChange={(e) =>
                        setAddress({
                          ...address,
                          pincode: e.target.value,
                        })
                      }
                      type="text"
                      name="post-code"
                      id="post-code"
                      placeholder="Post Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type="submit"
              >
                Sign-up
              </button>
            </div>
            <br></br>
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
        {/* <div className="w-1/6 bg-gray-200"></div> */}
        <div className="w-1/2  flex items-start">
          <div className="px-4  text-black md:mx-6 md:p-12">
            <br></br>
            <div className="items-center">
              <img
                className="mx-auto w-48"
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                // src="/RuralRise.png"
                alt="logo"
              />
              {/* <h4 className=" text-xl font-semibold">
              RuralRise
            </h4> */}

            </div>
            <br></br>

            <h4 className="mb-5 text-xl font-semibold">
              We are more than just a company
            </h4>
            <p className="text-lg mb-3">
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
        <ToastContainer />
      </div>
      <Footer/>
    </>
  );
}
