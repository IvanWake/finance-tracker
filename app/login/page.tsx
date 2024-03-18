import LogInForm from "@/components/Auth/LogInForm";

const LogIn = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 space-y-5 h-[100vh] w-full">
            <LogInForm />
        </div>
    );
}

export default LogIn;