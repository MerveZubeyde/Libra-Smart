"use client";

import { useState, useEffect, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "../../services/authService";
import { useAuth } from "../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthContainer from "../../components/AuthContainer";
import ErrorMessage from "../../components/ErrorMessage";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      router.push("/home");
    } catch (err) {
      setError("Failed to sign in");
    }
  };

  return (
    <AuthContainer
      title="Sign In"
      subtitle="Please enter your credentials to log in"
      borderColor="border-[#4FD1C5]"
    >
      <form onSubmit={handleSignIn} className="w-full max-w-md space-y-6">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setPassword(e.target.value)
          }
          placeholder="Enter your password"
        />
        <ErrorMessage message={error} />
        <Button text="Sign In" type="submit" />
      </form>
    </AuthContainer>
  );
}
