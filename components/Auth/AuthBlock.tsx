import Link from "next/link";
import AuthButton from "@/components/Auth/AuthButton";

const AuthBlock = () => {
    return (
        <div className="flex items-center justify-between space-x-2">
            <Link href="/login">
                <AuthButton
                    content="Log In"
                    addingStyles="text-white bg-black px-7 border-[1px] text-xl
                        font-medium hover:bg-white hover:text-black"
                />
            </Link>
            <Link href="/signup">
                <AuthButton
                    content="Sign Up"
                    addingStyles="text-black bg-white px-6 border-[1px] text-xl
                        font-medium hover:bg-black hover:text-white"
                />
            </Link>
        </div>
    );
}

export default AuthBlock;