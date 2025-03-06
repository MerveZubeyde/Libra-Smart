"use client";
import { useEffect, useState } from "react";

export default function TermsOfService() {
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

    return (
      <div className="max-w-3xl mx-auto py-10 px-6 text-gray-400">
        <h1 className="text-gray-300 text-3xl font-bold text-center mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to LibraSmart. By using our services, you agree to the following terms and conditions.
        </p>
        <h2 className="text-gray-300 text-xl font-semibold mt-6">1. General</h2>
        <p className="mb-4">These terms govern your use of our website and services.</p>
  
        <h2 className="text-gray-300 text-xl font-semibold mt-6">2. Privacy</h2>
        <p className="mb-4">
          Your privacy is important to us. Please read our Privacy Policy.
        </p>
  
        <h2 className="text-gray-300 text-xl font-semibold mt-6">3. User Responsibilities</h2>
        <p className="mb-4">Users must comply with all applicable laws when using our platform.</p>
  
        <h2 className="text-gray-300 text-xl font-semibold mt-6">4. Changes to Terms</h2>
        <p className="mb-4">We may update these terms at any time. Continued use of the site means acceptance of the changes.</p>
  
        <p className="text-gray-400 mt-8 text-center ">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    );
  }
  