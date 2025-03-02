import { useRouter } from "next/navigation"; 

export default function SignInPage() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/homepage");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Sign In</h1>
      <button
        onClick={handleSignIn}
        className="bg-blue-400 text-white px-8 py-4 rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
}