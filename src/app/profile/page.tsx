"use client";

import { useState, JSX } from "react";
import { useAuth } from "../context/AuthContext";
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

export default function ProfilePage(): JSX.Element {
  const { user, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [passwordError, setPasswordError] = useState<string>("");

  const handleProfileUpdate = async () => {
    if (!user) return;

    setLoadingState(true);
    setPasswordError("");

    try {
      if (newPassword && newPassword !== confirmNewPassword) {
        setPasswordError("New passwords do not match.");
        return;
      }
      if (newPassword) {
        const credential = EmailAuthProvider.credential(
          user.email!,
          oldPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
      }
      if (newDisplayName !== user.displayName) {
        await updateProfile(user, { displayName: newDisplayName });
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile: ", error);
      setPasswordError("Failed to update profile. Please try again.");
    } finally {
      setLoadingState(false);
    }
  };

  if (loading || !user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-start justify-center mt-10 md:mt-16">
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-r from-[#1A202C] to-[#2D3748] shadow-xl rounded-xl p-6 md:p-8 text-white flex flex-col items-center space-y-8 mx-auto">
        {isEditing ? (
          <>
            <h2 className="text-3xl font-bold text-center">Edit Profile</h2>

            <div className="w-full">
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Display Name:
              </label>
              <input
                type="text"
                id="displayName"
                className="p-3 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-[#4FD1C5] transition"
                value={newDisplayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
                placeholder="Enter your display name"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Old Password:
              </label>
              <input
                type="password"
                id="oldPassword"
                className="p-3 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-[#4FD1C5] transition"
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                className="p-3 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-[#4FD1C5] transition"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Confirm New Password:
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                className="p-3 w-full rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-[#4FD1C5] transition"
                placeholder="Confirm your new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>

            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}

            <div className="flex flex-col md:flex-row w-full gap-4 mt-6">
              <button
                onClick={handleProfileUpdate}
                className="w-full md:w-1/2 bg-[#4FD1C5] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#38B2AC] transition-all"
                disabled={loadingState}
              >
                {loadingState ? "Updating..." : "Update Profile"}
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="w-full md:w-1/2 bg-gray-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-gray-700 transition-all"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold">{user.displayName}</h2>
              <p className="text-lg text-gray-300">{user.email}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-[#4FD1C5] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#38B2AC] transition-all transform hover:scale-105"
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}
