"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    setUser(null);
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
