import React, { useState } from "react";
import { useNavigate } from "next/navigation";
import { Timestamp } from "firebase/firestore";

function QuoteForm({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    console.log("[Redirect] Navigating to the home page.");
    navigate("/");
  };

  const validateFormData = (formData) => {
    console.log("[Validation] Validating form data...");
    // if (!formData.lookingFor) return "Please select the insurance type.";
    // if (!["Life", "Travel", "Auto", "Commercial"].includes(formData.lookingFor))
    //   return "Invalid insurance type selected.";
    if (!formData.planningToBuy) return "Please select when you plan to buy.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.name || formData.name.length < 2)
      return "Please enter a valid name (at least 2 characters).";
    if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
      return "Please enter a valid 10-digit contact number.";
    if (!formData.countryCode) return "Please select a country code.";
    console.log("[Validation] All fields validated successfully.");
    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("[Form Submission] Form submitted.");

    const formData = new FormData(event.target);

    const data = {
      lookingFor: formData.get("lookingFor"),
      planningToBuy: formData.get("planningToBuy"),
      email: formData.get("email"),
      name: formData.get("name"),
      contactNumber: formData.get("contactNumber"),
      countryCode: formData.get("countryCode"),
      timestamp: Timestamp.now(),
      readableTimestamp: new Date().toLocaleString(),
    };

    console.log("[Form Submission] Extracted data:", data);

    const validationError = validateFormData(data);
    if (validationError) {
      console.error("[Validation Error]:", validationError);
      alert(validationError); // Optional: Alert the user for better UX
      return;
    }

    try {
      console.log("[Server Communication] Sending data to the server...");
      const response = await fetch("http://localhost:5137/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("[Server Communication] Server response received.");
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        console.log("[Server Communication] Form submitted successfully!");
      } else {
        console.error("[Server Communication Error]:", result.message);
        alert(result.message || "Something went wrong while submitting the form.");
      }
    } catch (error) {
      console.error("[Server Communication Error]:", error);
      alert("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {!submitted ? (
        <div className="bg-white h-[70vh] text-gray-600 rounded-3xl shadow-lg max-w-2xl w-full flex relative mx-2">
          <div className="p-10 md:w-[55%]">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="font-semibold">Your Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="border-2 border-gray-300 rounded-full px-3 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Planning to buy</label>
                <select
                  name="planningToBuy"
                  className="border-2 border-gray-300 rounded-full px-3 py-2"
                >
                  <option value="">Select</option>
                  <option value="1-2 Weeks">1-2 Weeks</option>
                  <option value="2-4 Weeks">2-4 Weeks</option>
                  <option value="1 Month">1 Month</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Email address</label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="border-2 border-gray-300 rounded-full px-3 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">
                  Contact number <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-2 rounded-full border-2 border-gray-300 p-2">
                  <select
                    name="countryCode"
                    className="bg-white focus:outline-none"
                    defaultValue="+40"
                  >
                    <option value="+91">+91</option>
                    <option value="+40">+40</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Contact number"
                    name="contactNumber"
                    className="flex-1 focus:outline-none focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-600 transition-colors duration-500 ease-in-out text-white py-3 rounded-full mt-4"
              >
                Get a Free Quote
              </button>
              <p className="text-sm text-start text-gray-500 mt-4">
                I agree to <span className="underline">Terms of Service</span> and{" "}
                <span className="underline">Privacy Policy</span> when getting a free quote from
              </p>
            </form>
          </div>
          <div className="hidden md:block relative right-[-5px] ">
            <img src="health.png" alt="health" className="h-[70vh] object-cover" />
          </div>
          <div className="absolute right-[-2%] top-[-2%]">
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 text-gray-500 bg-black hover:text-white rounded-full font-bold text-3xl p-8"
            >
              ✖
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white text-center p-8 rounded-3xl shadow-lg max-w-md w-full flex flex-col items-center relative">
          <button
            onClick={onClose}
            className="absolute top-[-7px] right-[-7px] w-12 h-12 text-gray-500 bg-black hover:text-white rounded-full font-bold text-xl"
          >
            ✖
          </button>
          <h2 className="text-4xl font-semibold text-gray-700 mb-4">You're all set</h2>
          <img src="done.png" alt="Thank You" className="h-32 w-32 object-cover mb-4" />
          <p className="text-gray-600 mb-6">
            Thank you for sharing the details, Our Advisor will get back to you shortly!
          </p>
          <button
            onClick={handleHomeRedirect}
            className="bg-cyan-400 text-white py-2 px-6 rounded-full"
          >
            Sounds good!
          </button>
        </div>
      )}
    </div>
  );
}

export default QuoteForm;
