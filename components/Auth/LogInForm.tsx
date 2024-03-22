'use client';
import {useForm, SubmitHandler} from "react-hook-form";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {useRouter} from "next/navigation";
import {useAuth} from "@/store/auth-store";
import {auth} from "@/firebase";
import Link from "next/link";
import AuthButton from "@/components/Auth/AuthButton";

type Inputs = {
    loginEmail: string,
    loginPass: string,
}

const LogInForm = () => {
    const {setUser, setIsUserAuth} = useAuth();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Inputs>({mode: "onBlur"});

    const onSubmitHandler: SubmitHandler<Inputs> = (loginData) => {
        logInHandler(loginData.loginEmail, loginData.loginPass)
    }

    const logInHandler = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
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
            console.log(error)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex flex-col space-y-4 p-[8rem] border-[1px]">
                <h1 className="text-white text-4xl font-medium my-4">Log In</h1>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("loginEmail", {
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
                    {errors.loginEmail && <p className="text-[#FA8072]">{errors.loginEmail.message}</p>}
                </div>
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password">Password</label>
                    <input
                        {...register("loginPass", {
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
                    {errors.loginPass && <p className="text-[#FA8072]">{errors.loginPass.message}</p>}
                </div>
                <button type="submit" className="py-4">
                    <AuthButton content="Log In" addingStyles="text-black bg-white px-6 border-[1px] text-xl
                        font-medium hover:bg-black hover:text-white"/>
                </button>
                <p>Don't have account? <Link href="/signup"><span
                    className="font-medium underline">Sign Up</span></Link></p>
            </div>

        </form>
    )
}

export default LogInForm;