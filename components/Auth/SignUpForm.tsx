'use client';
import AuthButton from "@/components/Auth/AuthButton";

const SignUpForm = () => {
    return (
        <form>
            <div className="flex flex-col space-y-4 p-[8rem] border-[1px]">
                <h1 className="text-white text-4xl font-medium my-4">Sign Up</h1>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="outline-none border-b-[1px] text-white bg-black" />
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="outline-none border-b-[1px] text-white bg-black" />
                </div>
                <button type="submit" className="py-4">
                    <AuthButton content="Log In" addingStyles="text-black bg-white px-6 border-[1px] text-xl
                        font-medium hover:bg-black hover:text-white"/>
                </button>
            </div>

        </form>
    )
}

export default SignUpForm;