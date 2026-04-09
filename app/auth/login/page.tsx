import { Navbar } from "@/components/landing/Navbar";
import { DevLoginForm } from "@/components/auth/DevLoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DevLoginForm />
    </main>
  );
}
