'use client'

import { authClient } from "@/lib/auth-client";
import { Separator } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

const SignInPage = () => {
    // password visible eye toggle state
    const [isPassVisible, setIsPassVisible] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            password, // required
            email, // required
            callbackURL: '/'
        });
        // console.log(error);

        if (res) {
            toast.success('Login Successful');
        }
        if (error) {
            toast.error(`${error.message}`);
        }
    }
    const handleGoogleSignInBtn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 bg-base-200 border-base-300 rounded-box">
            <h2 className="text-3xl font-bold text-[#154734] mt-10">Login Your Account</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="fieldset w-xs">

                <label className="label">Email</label>
                <input type="email"
                    {...register("email", { required: 'Email is required' })}
                    className="input" placeholder="Email" />
                {errors.email && <span>{errors.email.message}</span>}

                <div className="relative">
                    <label className="label">Password</label>
                    <input type={isPassVisible ? "text" : "password"}
                        {...register("password", { required: 'Password is required', minLength: { value: 8, message: 'Minimum Length is 8' } })}
                        className="input" placeholder="Password" />
                    <span className="absolute right-4 bottom-3" onClick={() => setIsPassVisible(!isPassVisible)}>
                        {isPassVisible ? <FaRegEye size={20}></FaRegEye> : <FaRegEyeSlash size={20}></FaRegEyeSlash>}
                    </span>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button className="btn bg-[#154734] text-white rounded-3xl mt-4">Sign in</button>
                <p className="text-[14px] text-center">Don't have any account? <Link href={'/signup'} className="text-[#154734]">Sign up</Link></p>
            </form>
            <div className="flex flex-col items-center w-xs">
                <div className="divider mt-0">OR</div>
                <button onClick={handleGoogleSignInBtn} className="btn border border-blue-500 text-blue-500 rounded-3xl mb-10"><FaGoogle></FaGoogle> Continue with Google</button>
            </div>
        </div>
    );
}

export default SignInPage;