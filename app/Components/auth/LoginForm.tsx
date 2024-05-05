"use client";
import React, { createContext } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { FormikValues } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    onSubmit: (values: FormikValues) => {
      // Specify FormikValues as the type for the 'values' parameter
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block font-bold mb-2">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-bold mb-2">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
        <Link
          href="/forgot-password"
          className="text-blue-500 hover:text-blue-800"
        >
          Forgot Password?
        </Link>
      </div>
      <p className="text-center">
        Don &#39;t have an account?{" "}
        <Link
          href="/registerationForm"
          className="text-blue-500 hover:text-blue-800"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
