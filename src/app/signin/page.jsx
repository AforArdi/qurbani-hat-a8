'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

const SignInPage = () => {
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
    return (
        <div className="flex flex-col justify-center items-center gap-5 my-10">
            <h2 className="text-3xl font-bold text-[#154734]">Login Your Account</h2>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Email</label>
                <input type="email"
                {...register("email", { required: 'Email is required' })}
                className="input" placeholder="Email" />
                {errors.email && <span>{errors.email.message}</span>}

                <label className="label">Password</label>
                <input type="password"
                {...register("password", { required: 'Password is required', minLength: 8 })}
                className="input" placeholder="Password" />
                {errors.password && <span>{errors.password.message}</span>}

                <button className="btn bg-[#154734] text-white rounded-3xl mt-4">Sign in</button>
                <p className="text-[14px]">Don't have any account? <Link href={'/signup'} className="text-[#154734]">Sign up</Link></p>
            </form>
        </div>
    );
}

export default SignInPage;