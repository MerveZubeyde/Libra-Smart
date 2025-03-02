import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/signinpage"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
      <button
        onClick={handleSignOut}
        className="px-6 py-2 bg-red-600 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}