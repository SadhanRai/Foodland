import LoginForm from "../../../../src/components/admin/form/LoginForm";

export const metadata = {
    title: "Admin Login | Foodieland",
};

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e3e3f0] p-4">
            {/* Simply import and use the component */}
            <LoginForm />
        </div>
    );
}