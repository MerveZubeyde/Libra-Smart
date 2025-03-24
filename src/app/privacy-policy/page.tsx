"use client";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="max-w-2xl md:max-w-3xl mx-auto py-6 px-4 sm:py-10 sm:px-6 text-gray-400">
      <h1 className="text-gray-300 text-2xl sm:text-3xl font-bold text-center mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4 text-xl text-gray-300 font-bold">
        At LibraSmart, we respect your privacy and are committed to protecting
        your personal data.
      </p>

      <h2 className="text-lg sm:text-xl font-semibold text-gray-300 mt-6">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-base sm:text-lg">
        We collect personal data such as name, email, and usage data for
        improving our services.
      </p>

      <h2 className="text-lg sm:text-xl text-gray-300 font-semibold mt-6">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-base sm:text-lg">
        Your data is used to enhance our services, provide customer support, and
        improve user experience.
      </p>

      <h2 className="text-lg sm:text-xl text-gray-300 font-semibold mt-6">
        3. Data Protection
      </h2>
      <p className="mb-4 text-base sm:text-lg">
        We implement security measures to safeguard your personal information.
      </p>

      <h2 className="text-lg sm:text-xl text-gray-300 font-semibold mt-6">
        4. Third-Party Services
      </h2>
      <p className="mb-4 text-base sm:text-lg">
        We may use third-party services for analytics and marketing, which
        comply with privacy regulations.
      </p>

      <h2 className="text-lg sm:text-xl text-gray-300 font-semibold mt-6">
        5. Your Rights
      </h2>
      <p className="mb-4 text-base sm:text-lg">
        You have the right to access, modify, or delete your personal data.
        Contact us for assistance.
      </p>

      <h2 className="text-lg sm:text-xl text-gray-300 font-semibold mt-6">
        6. Changes to This Policy
      </h2>
      <p className="mb-4 text-base sm:text-lg">
        We may update this Privacy Policy from time to time. Please check this
        page for the latest version.
      </p>

      <p className="mt-8 text-center text-gray-500">
        Last updated: {lastUpdated}
      </p>
    </div>
  );
}
