import { AuthSkeleton } from "@/components/auth/AuthSkeleton";
import { Navbar } from "@/components/landing/Navbar";

export default function SignupPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AuthSkeleton
        title="Create Your Account"
        subtitle="Sign-up skeleton with role-based dashboard onboarding."
        roleHint="DEVELOPER"
      />
    </main>
  );
}
