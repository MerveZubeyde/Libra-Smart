"use client";

import { useState } from "react";
import { signUp } from "../../services/authService";
import { useRouter } from "next/navigation";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthContainer from "../../components/AuthContainer";
import ErrorMessage from "../../components/ErrorMessage";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      alert("Sign-up successful!");
      router.push("/signin");
    } catch (err) {
      setError("Failed to sign up");
    }
  };

  return (
    <AuthContainer
      title="Sign Up"
      subtitle="Create an account to get started"
      borderColor="border-[#FFA500]"
    >
      <form onSubmit={handleSignUp} className="w-full max-w-md space-y-6">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <ErrorMessage message={error} />
        <Button text="Sign Up" type="submit" />
      </form>
    </AuthContainer>
  );
}
