'use client';

import SignUpForm from "@/components/Auth/SignUpForm";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 space-y-5 h-[100vh] w-full">
            <SignUpForm />
        </div>
    );
}

export default SignUp;