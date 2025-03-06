"use client";

import { useAuth } from "../app/context/AuthContext";
import { FC } from "react";

const ProfilePage: FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Profile</h1>
      {user ? (
        <div>
          <p>
            <strong>Name:</strong> {user.displayName || user.email}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

