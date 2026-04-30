'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";

const SignUpPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { name, email, password, photo } = data;

        const { data: res, error } = await authClient.signUp.email({
            name, // required
            email, // required
            password, // required
            image: photo, // required
        });
        console.log(error);

        if (res) {
            toast.success('Account Successfully Created');
            router.push('/');
        }
        if (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center gap-5 my-10">
            <h2 className="text-3xl font-bold text-[#154734]">Register Your Account</h2>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <label className="label">Name</label>
                <input type="text"
                {...register("name", { required: 'Name is required' })}
                className="input" placeholder="Name" />
                {errors.name && <span>{errors.name.message}</span>}

                <label className="label">Email</label>
                <input type="email"
                {...register("email", { required: 'Email is required' })}
                className="input" placeholder="Email" />
                {errors.email && <span>{errors.email.message}</span>}

                <label className="label">Password</label>
                <input type="password"
                {...register("password", { required: 'Password is required' })}
                className="input" placeholder="Password" />
                {errors.password && <span>{errors.password.message}</span>}

                <label className="label">Photo URL</label>
                <input type="text"
                {...register("photo", { required: 'Photo URL is required' })}
                className="input" placeholder="Photo url" />
                {errors.photo && <span>{errors.photo.message}</span>}

                <button className="btn bg-[#154734] text-white rounded-3xl mt-4">Sign up</button>
                <p className="text-[14px]">Already have an account? <Link href={'/signin'} className="text-[#154734]">Sign in</Link></p>
            </form>
        </div>
    );
}

export default SignUpPage;