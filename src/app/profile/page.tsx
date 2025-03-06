"use client";

import { useState, JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { updateProfile, updatePassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();
export default function ProfilePage(): JSX.Element {
  const { user, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [loadingState, setLoadingState] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImage(e.target.files[0]);
    }
  };

  const handleProfileUpdate = async () => {
    if (!user) return;

    setLoadingState(true);

    try {
      if (newImage) {
        const imageRef = ref(storage, `profile_pics/${user.uid}`);
        await uploadBytes(imageRef, newImage);
        const imageUrl = await getDownloadURL(imageRef);
        await updateProfile(user, { photoURL: imageUrl });
      }

      if (newDisplayName !== user.displayName) {
        await updateProfile(user, { displayName: newDisplayName });
      }

      if (newPassword) {
        await updatePassword(user, newPassword);
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Hata oluştu: ", error);
    } finally {
      setLoadingState(false);
    }
  };

  if (loading || !user) return <div>Loading...</div>;

  return (
    <div className="profile-page min-h-screen flex items-start pt-20 mx-auto sm:max-w-3xl">
      {isEditing ? (
        <div className="edit-profile-form w-full sm:max-w-2xl bg-gradient-to-r from-[#1A202C] to-[#2D3748] shadow-xl rounded-xl p-8 text-white flex flex-col items-center space-y-8">
          <div className="w-full mb-6">
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Display Name:
            </label>
            <input
              type="text"
              id="displayName"
              className="p-3 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent transition duration-200"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
              placeholder="Enter your display name"
            />
          </div>

          <div className="w-full mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              New Password:
            </label>
            <input
              type="password"
              id="password"
              className="p-3 w-full rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent transition duration-200"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="w-full mb-6">
            <label
              htmlFor="profileImage"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Profile Image:
            </label>
            <input
              type="file"
              id="profileImage"
              className="p-3 w-full text-white bg-gray-700 border-2 border-dashed border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:border-transparent transition duration-200"
              onChange={handleImageChange}
              lang="en"
            />
            {newImage && (
              <div className="mt-2 text-center text-gray-300">
                <p>Selected Image: {newImage.name}</p>
              </div>
            )}
          </div>

          <div className="flex w-full gap-4 mt-6">
            <button
              onClick={handleProfileUpdate}
              className="w-full bg-[#4FD1C5] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#38B2AC] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-300"
              disabled={loadingState}
            >
              {loadingState ? "Updating..." : "Update Profile"}
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="w-full bg-gray-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="view-profile w-full sm:max-w-2xl bg-gradient-to-r from-[#1A202C] to-[#2D3748] shadow-xl rounded-xl p-8 text-white flex flex-col items-center space-y-10">
          <div className="mb-4 flex justify-center items-center flex-col">
            <div className="profile-image-container relative">
              <img
                src={user.photoURL || "/default-avatar.png"}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white overflow-hidden"
              />
              <div className="absolute bottom-0 right-0 bg-gray-700 text-white px-2 py-1 rounded-full text-sm"></div>
            </div>
            <h2 className="text-3xl font-bold text-[#F7FAFC]">
              {user.displayName}
            </h2>
            <p className="text-lg text-gray-300">{user.email}</p>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-[#4FD1C5] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#38B2AC] focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg font-medium">Edit Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
