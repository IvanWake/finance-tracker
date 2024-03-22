'use client';
import {SubmitHandler, useForm} from "react-hook-form";
import {useAuth} from "@/store/auth-store";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/firebase";
import {useRouter} from "next/navigation";
import Link from "next/link";
import AuthButton from "@/components/Auth/AuthButton";

type Inputs = {
    signupEmail: string,
    signupPass: string,
}

const SignUpForm = () => {
    const {setUser, setIsUserAuth} = useAuth();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Inputs>({mode: "onBlur"});


    const registerUserHandler = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                if (user.email && user.uid) {
                    setUser({
                        id: user.uid,
                        email: user.email,
                    })
                    setIsUserAuth(true);
                    reset();
                    router.push("/");
                }
            }).catch((error) => {
            console.log(error);
        })
    }

    const onSubmitHandler: SubmitHandler<Inputs> = (signUpData) => {
        registerUserHandler(signUpData.signupEmail, signUpData.signupPass);
    }

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex flex-col space-y-4 p-[8rem] border-[1px]">
                <h1 className="text-white text-4xl font-medium my-4">Sign Up</h1>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("signupEmail", {
                            required: "Fill the Email",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Invalid email format"
                            },
                        })}
                        id="email"
                        type="email"
                        autoComplete="off"
                        className="outline-none border-b-[1px] text-white bg-black"
                    />
                    {errors.signupEmail && <p className="text-[#FA8072]">{errors.signupEmail.message}</p>}
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input
                        {...register("signupPass", {
                            required: "Fill the pass",
                            minLength: {
                                value: 6,
                                message: "Min 6 symbols"
                            }
                        })}
                        id="password"
                        type="password"
                        autoComplete="off"
                        className="outline-none border-b-[1px] text-white bg-black"
                    />
                    {errors.signupPass && <p className="text-[#FA8072]">{errors.signupPass.message}</p>}
                </div>
                <button type="submit" className="py-4">
                    <AuthButton content="Sign Up" addingStyles="text-black bg-white px-6 border-[1px] text-xl
                        font-medium hover:bg-black hover:text-white"/>
                </button>
                <p>Already have account? <Link href="/login"><span
                    className="font-medium underline">Log In</span></Link></p>
            </div>

        </form>
    )
}

export default SignUpForm;