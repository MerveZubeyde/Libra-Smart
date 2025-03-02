import { useRouter } from "next/navigation"; 

export default function RegistrationPage() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/homepage");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Register</h1>
      <button
        onClick={handleRegister}
        className="bg-blue-400 text-white px-8 py-4 rounded-lg"
      >
        Register
      </button>
    </div>
  );
}