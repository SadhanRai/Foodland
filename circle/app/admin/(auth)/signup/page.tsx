import SignupForm from "../../../../src/components/admin/SignUpForm";

export const metadata = {
    title: "Admin Signup | Foodieland",
};

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e3e3f0] p-4">
            <SignupForm />
        </div>
    );
}